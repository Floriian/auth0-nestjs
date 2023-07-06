import { registerAs } from '@nestjs/config';

export const authOptions = registerAs('auth', () => ({
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
}));
