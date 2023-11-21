
import postmark from 'postmark'
import { POST_MARK_SERVER_TOKEN } from '../config/constants.js';
export const sendMail =async (tomail,templateAlias,templateModel) => {
  console.log(templateAlias)
  let client = new postmark.ServerClient(POST_MARK_SERVER_TOKEN);
  console.log("send email")
  const response = await client.sendEmailWithTemplate({
      "From": "saas.demo@tensorgo.co",
      "To": tomail,
      "TemplateAlias": templateAlias,
      "TemplateModel": templateModel,
  });
  console.log(response);
  return response;
}
/* 
{
  ErrorCode: 0,
  Message: 'OK',
  MessageID: '1dac2f93-871f-442b-9afa-9b0de51f25e0',
  SubmittedAt: '2023-11-19T20:08:46.6351655Z',
  To: 'akashlucky1414@gmail.com'
}
PS C
*/