import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "utils/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
});
