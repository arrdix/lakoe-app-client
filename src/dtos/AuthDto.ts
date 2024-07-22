export type loginDto = {
  email: string;
  password: string;
};

export type registerDto = {
  role: string;
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
