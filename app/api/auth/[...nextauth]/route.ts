import  CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt"
export const authOption: NextAuthOptions = {
  //store 
  adapter: PrismaAdapter(prisma),
  providers: [
    //credential ka google nae chate tr 
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if(!credentials?.email || !credentials.password) return null
        const users = await prisma.user.findUnique({
          where:{
            email:credentials.email,
          }
        })
        if(!users) return null
        const passwordMatch =await bcrypt.compare(credentials.password,users.hashedPassword!);
        return passwordMatch ? users : null
      },

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
