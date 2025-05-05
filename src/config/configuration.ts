export default () => ({
    port: parseInt(process.env.PORT || '5000'),
    database: {
      uri: process.env.MONGO_URI,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    },
    redis: {
      redisURL: process.env.REDIS_URL
    },
    mail: {
      mailProvider: process.env.MAIL_PROVIDER,
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  