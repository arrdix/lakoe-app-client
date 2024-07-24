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

export type forgotPasswordDto = {
  email: string;
};

export type resetPasswordDto = {
  password: string;
};
