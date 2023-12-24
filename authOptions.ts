import { NextAuthOptions, getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

import { config } from "@/auth";

export const authOptions: NextAuthOptions = {
    ...config,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", },
                password: { label: "Password", type: "password", }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:8080/api/v1/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                })

                const user = await res.json();

                if (res.ok && user) {
                    return user;
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                token.accessToken = user.accessToken;
                token.roles = user.roles;
            }
            
            return token;
        },
        session({ session, token, user }) {
            
            session.accessToken = token.accessToken as string;
            session.user.roles = token.roles as string[];
            // console.log("Session in session", {...session});

            return session;
        },

    },
};

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, authOptions)
}