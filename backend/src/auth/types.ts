export interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}
