import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
//mongodb+srv://drako9159:aucpGcl2ZzoDBNjV@cluster0.3884ps0.mongodb.net/dbapi?retryWrites=true&w=majority
//mongodb://atlas-sql-63a8f644f41e791783ade416-1xusq.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://drako9159:aucpGcl2ZzoDBNjV@cluster0.3884ps0.mongodb.net/dbapi?retryWrites=true&w=majority'), TasksModule],
})
export class AppModule {}
