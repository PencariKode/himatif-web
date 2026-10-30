/** @type {import('next-auth').NextAuthConfig} */
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 24 jam
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user);
      const isAdmin = auth?.user?.role === "ADMIN";
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnLogin = nextUrl.pathname === "/login";

      if (isOnAdmin) {
        if (isLoggedIn && isAdmin) return true;
        return false; // Otomatis redirect ke /login
      }

      if (isOnLogin && isLoggedIn && isAdmin) {
        return Response.redirect(new URL("/admin", nextUrl));
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
  },
  providers: [],
};

export default authConfig;
