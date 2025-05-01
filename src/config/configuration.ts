export default () => ({
    port: parseInt(process.env.PORT || '3000'),
    database: {
      uri: process.env.MONGO_URI,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    },
    redis: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT || '6379'),
    },
    mail: {
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  