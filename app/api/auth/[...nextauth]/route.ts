import NextAuth, { NextAuthOptions, User, getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

import { config } from "@/auth";

export const authOptions: NextAuthOptions = {
    ...config,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email",},
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
                    console.log("Log user in provider: " + JSON.stringify(user))
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
                // console.log("Log user in callbacks jwt: " + JSON.stringify(user));
                // console.log("Log account in callbacks jwt: " + JSON.stringify(account));
            }
            // console.log("Log token in callbacks jwt: " + JSON.stringify(token));
            return token;
        },
        session({ session, token, user }) {
            session.accessToken = token.accessToken as string;
            session.user.roles = token.roles as string[];
            console.log("Session in session", session);

            return session;
        },

    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

