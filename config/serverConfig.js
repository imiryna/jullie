export const serverConfig = {
  mongoUrl: process.env.MONGO_URL ?? "mongodb/localhost:27017",
  environment: process.env.NODE_ENV ?? "development",
  jwtSecret: process.env.JWT_SECRET ?? "secret-phrase",
  jwtExpare: process.env.JWT_EXPARE ?? "1d",
};
