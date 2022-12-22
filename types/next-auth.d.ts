import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      firstname?: string;
      lastname?: string;
      email?: string;
    };
  }
}
