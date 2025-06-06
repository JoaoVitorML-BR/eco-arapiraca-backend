import { Document, Model, Types } from "mongoose";

export interface IEcoPoint extends Document {
  _id: Types.ObjectId | string;
  id?: string;
  title: string;
  cnpj: string;
  opening_hours: string;
  interval: string;
  accepted_materials: string[];
  address: string;
  coordinates: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EcoPointFindByCnpj {
    cnpj: string;
    coordinates: string;
}

export interface IEcoPointModel extends Model<IEcoPoint> {}