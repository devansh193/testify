import { NextResponse } from "next/server";

export class ApiResponse<T> {
  status: boolean;
  code: number;
  message: string;
  data?: T;
  error?: string;

  constructor(
    status: boolean,
    code: number,
    message: string,
    data?: T,
    error?: string
  ) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
    this.error = error;
  }

  serialize(): ApiResponseType<T> {
    return {
      status: this.status,
      code: this.code,
      message: this.message,
      data: this.data,
      error: this.error,
    };
  }

  static success<T = unknown>(
    data: T,
    message = "Request successful",
    code = 200
  ): NextResponse {
    const response = new ApiResponse<T>(true, code, message, data);
    return NextResponse.json(response.serialize());
  }

  static error(message: string, code = 400, error?: string): NextResponse {
    const response = new ApiResponse<null>(
      false,
      code,
      message,
      undefined,
      error
    );
    return NextResponse.json(response.serialize(), { status: code });
  }
}

export type ApiResponseType<T = unknown> = {
  status: boolean;
  code: number;
  message: string;
  data?: T;
  error?: string;
};
