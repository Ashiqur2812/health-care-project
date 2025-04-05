import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("Credentials from Auth", credentials);

        try {
          const res = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          console.log("Request sent to /auth/login");

          if (!res.ok) {
            console.error("Login failed, response status:", res.status);
            return null;
          }

          const user = await res.json();
          console.log("User after returning value:", user);

          if (user && user.id && user.email) {
            return user;
          } else {
            console.error("User data is invalid:", user);
            return null;
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
