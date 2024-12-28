import { NextRequest, NextResponse } from "next/server";
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const REGION = "ap-south-1";
const QUEUE_URL = process.env.SQS_QUEUE_URL as string;

const sqsClient = new SQSClient({ region: REGION });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messageBody } = body;

    if (!messageBody) {
      return NextResponse.json(
        { error: "Message body is required" },
        { status: 400 }
      );
    }

    const params = {
      QueueUrl: QUEUE_URL,
      MessageBody: JSON.stringify(messageBody),
    };

    const command = new SendMessageCommand(params);
    const response = await sqsClient.send(command);

    return NextResponse.json({
      message: "Message sent successfully",
      messageId: response.MessageId,
    });
  } catch (error) {
    console.error("Error sending message to SQS:", error);
    return NextResponse.json(
      { error: "Failed to send message to SQS" },
      { status: 500 }
    );
  }
}
