export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN || "https://driving-starling-22.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};