import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      firstName?: string;
      lastName?: string;
      email?: string;
    };
  }
}
