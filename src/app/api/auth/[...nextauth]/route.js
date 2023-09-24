import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
//youtube 2:17:48
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})