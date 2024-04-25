import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop({ type: mongoose.SchemaTypes.ObjectId })
  _id: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
