import crypto = require('crypto');

export function hash(secret: string): string {
  return crypto
    .createHmac('sha256', secret)
    .digest('hex');
}
