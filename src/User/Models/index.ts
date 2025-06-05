import '../Middleware/index';
import { model } from 'mongoose';
import { IUser, IUserModel } from '../DTO/IUser';
import { UserSchema } from './UserSchema';

export const User = model<IUser, IUserModel>('User', UserSchema);