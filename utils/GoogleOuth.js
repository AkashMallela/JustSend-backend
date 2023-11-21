import { OAuth2Client } from 'google-auth-library';
import { CLIENT_SECRET } from '../config/constants.js';

export const CLIENT_ID = '590811174729-j0v5ub1ju0ajha6h0ahn0ltdrju4ttor.apps.googleusercontent.com'
async function verify(token) {
const client = new OAuth2Client(CLIENT_ID,CLIENT_SECRET);
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  console.log(payload);
  const userid = payload['sub'];
  return payload;
}
export default verify;