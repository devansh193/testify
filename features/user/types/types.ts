export type ResponseType = {
  success: boolean;
  message: string;
  user?: {
    id: string;
    name: string | null;
    email: string;
  };
};

export type RequestType = {
  name: string;
  email: string;
  password: string;
};

export type Context = {
  toastId: string | number;
};
