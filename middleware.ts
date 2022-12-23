export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/transfer", "/deposit", "/withdraw"],
};
