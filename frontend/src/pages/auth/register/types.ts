 
export interface IRegistrationRequest {
  email: string;
  password_1: string;
  password_2: string;
  username: string;
  type: string;
 
}

export interface IRegistrationResult {
 
  token: string;
  userId: number;
  verificationToken: string;
}
