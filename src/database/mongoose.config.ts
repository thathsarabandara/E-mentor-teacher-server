import { MongooseModuleOptions } from "@nestjs/mongoose";

export const monogoseConfig: MongooseModuleOptions = {
    uri: process.env.MONGO_URI
  }