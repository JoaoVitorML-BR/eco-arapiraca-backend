import { Schema } from 'mongoose';
import { IUser, IUserModel } from '../DTO/IUser';
import { v4 as uuidv4 } from 'uuid';

export const UserSchema = new Schema<IUser, IUserModel>({
  id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  name: {
    type: String,
    required: [true, 'Nome é obrigatório']
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Email inválido']
  },
  password: {
    type: String,
    required: [true, 'Senha é obrigatória'],
    select: false
  }
}, {
  timestamps: true,
  versionKey: false
});
