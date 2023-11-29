import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID ?? "",
      clientSecret: process.env.KEYCLOAK_SECRET ?? "",
      issuer: process.env.KEYCLOAK_ISSUER,
    })
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };