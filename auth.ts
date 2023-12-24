
import type { NextAuthOptions } from "next-auth";

import { SIGNIN_URI } from "@/constants/baseURL";

// You'll need to import and pass this to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
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


