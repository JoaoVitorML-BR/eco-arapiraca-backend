import { IUser } from '../DTO/IUser';
import { UserSchema } from '../Models/UserSchema';
import bcrypt from 'bcrypt';

UserSchema.pre<IUser>('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err as Error);
  }
});

export {};