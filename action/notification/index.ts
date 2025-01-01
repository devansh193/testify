"use server";
//import { withServerActionAsyncCatcher } from "@/lib/async-catch";
import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
const REGION = process.env.REGION as string;
const client = new SQSClient({ region: REGION });
const SQS_QUEUE_URL = process.env.SQS_QUEUE_URL;

interface MessageBodyTypes {
  mail: string;
  token: string;
}

//export const sendNotification = withServerActionAsyncCatcher<>

export const CallQueue = async (messageBody: MessageBodyTypes) => {
  const command = new SendMessageCommand({
    QueueUrl: SQS_QUEUE_URL,
    DelaySeconds: 10,
    MessageAttributes: {
      Email: {
        DataType: "String",
        StringValue: messageBody.mail,
      },
      Token: {
        DataType: "String",
        StringValue: messageBody.token,
      },
      WeeksOn: {
        DataType: "Number",
        StringValue: "6",
      },
    },
    MessageBody: JSON.stringify(messageBody),
  });
  const response = await client.send(command);
  console.log(response);
  return response;
};
