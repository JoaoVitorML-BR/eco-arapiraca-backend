import { model } from "mongoose";
import { IEcoPoint, IEcoPointModel } from "../DTO/IEcoPoint";
import { EcoPointSchema } from "./EcoSchema";

export const Eco = model<IEcoPoint, IEcoPointModel>('EcoPoint', EcoPointSchema);