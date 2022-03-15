import axios from 'axios';
import { createHash } from 'crypto';
import { UPAuthResponse } from 'up-core-test';

export function sha256(message: string) {
  return `0x${createHash('SHA256').update(Buffer.from(message)).digest('hex')}`;
}

const MAX_EMAIL_LEN = 100;
const FR_EMAIL_LEN = Math.floor(MAX_EMAIL_LEN / 31) + 1;
const MIN_EMAIL_LEN = 6;

/**
 * parse email to remove special useless character
 * @param email
 * @returns
 */
function updateEmail(email: string): string {
  if (!email) return '';
  if (email.length < MIN_EMAIL_LEN || email.length > MAX_EMAIL_LEN) {
    throw new Error('Invalid email length');
  }
  email = email.toLocaleLowerCase().trim();
  const emailData = email.split('@');
  let prefix = emailData[0].split('+')[0];
  if (emailData[1] != 'gmail.com') return `${prefix}@${emailData[1]}`;
  const reg = new RegExp(/[\.]+/, 'g');
  prefix = prefix.trim().replace(reg, '');
  return `${prefix}@${emailData[1]}`;
}

/**
 * hash email with customized hash algorithm
 * @param email
 * @returns
 */
export function emailHash(email: string): string {
  email = updateEmail(email);
  if (!email) return '';

  const split = email.split('@', 2);
  let hash = createHash('sha256').update(split[0]).update('@').update(split[1]);
  let i;
  const len = split[0].length + 1 + split[1].length;
  for (i = 0; i < FR_EMAIL_LEN * 31 - len; ++i)
    hash = hash.update(new Uint8Array([0]));
  const hashRes = hash.digest();
  const hashResRev = hashRes.reverse();
  hashResRev[31] &= 0x1f;
  return '0x' + hashResRev.toString('hex');
}

export interface SignResponse {
  type: number;
  key: string;
  sig: string;
}

/**
 * convert UPAuthResponse to SignResponse
 * @param resp
 * @returns
 */
export function convertUPAuthResponse(resp: UPAuthResponse): SignResponse {
  const { pubkey, keyType, sig } = resp;

  const type =
    keyType === 'RsaPubkey' ? 0 : keyType === 'Secp256k1Pubkey' ? 1 : 2;
  const key =
    '0x' +
    Buffer.from(pubkey.replace('0x', ''), 'hex').slice(4).toString('hex');

  return { type, key, sig };
}

/**
 * submit asset transaction to UniPass transaction submitter
 * @param url UniPass transaction submitter RPC
 * @param email user email hash
 * @param method asset contract method
 * @param params method params
 * @returns
 */
export async function submitTransaction(
  url: string,
  email: string,
  method: string,
  params: (string | number)[]
): Promise<string> {
  const resp = await axios.post(url, {
    email,
    method,
    params,
  });

  const { transactionHash } = resp.data.data;
  return transactionHash;
}
