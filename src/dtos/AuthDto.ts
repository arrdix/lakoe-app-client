export type loginDto = {
  email: string;
  password: string;
};

export type registerDto = {
  name: string;
  email: string;
  password: string;
};

export type forgotPassword = {
  email: string;
};

export type resetPassword = {
  password: string;
};
