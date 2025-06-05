import { IUser } from '../DTO/IUser';
import { UserSchema } from '../Models/UserSchema';
import bcrypt from 'bcrypt';

UserSchema.methods.comparePassword = async function(
  this: IUser,
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};