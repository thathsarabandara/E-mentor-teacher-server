import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { monogoseConfig } from './database/mongoose.config';

ConfigModule.forRoot({
 isGlobal:true,
 load: [configuration]
})

export class AppModule {}
