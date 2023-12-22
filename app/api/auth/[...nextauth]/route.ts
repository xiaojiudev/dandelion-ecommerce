import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

import { config } from "@/auth";

export const authOptions: NextAuthOptions = {
    ...config,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "admin" },
                password: { label: "Password", type: "password" }
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
                console.log(user);


                if (res.ok && user) {
                    return user;
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            // console.log("account", account);

            if (user && 'accessToken' in user) {
                token.accessToken = user.accessToken;
                token.roles = user.roles;
            }

            return token;
        },
        session({ session, token, user }) {
            session.accessToken = token.accessToken as string;
            session.roles = token.roles as string[];
            // console.log("Session", session);
            return session;
        },

    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

