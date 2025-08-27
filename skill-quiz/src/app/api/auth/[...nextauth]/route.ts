import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// ...
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks:{
    signIn : async ({account,profile}) => {
      console.log(profile);
      if (account?.provider === "google") {
        // return profile.email_verified && profile?.email.endsWith("@example.com")
      }
      return true;
    }
  }
}
// ...
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };