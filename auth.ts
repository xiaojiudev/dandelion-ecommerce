import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import type { NextAuthOptions } from "next-auth";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

import { SIGNIN_URI } from "./constants/baseURL";

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
    pages: {
        signIn: SIGNIN_URI,
    },
    session: {
        strategy: "jwt",
    },
    providers: [],
    callbacks: {},
    secret: process.env.NEXTAUTH_SECRET as string,
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config)
}
