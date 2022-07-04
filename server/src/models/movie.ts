import { Document, Schema, model as MongooseModel } from "mongoose";

export interface IMovie {
  name: string;
  idCategory: string;
  description: string;
  url: string;
  posterUrl: string;
  duration: string;
  views: number;
}

export interface MovieModel extends IMovie, Document {}

const movieSchema = new Schema(
  {
    name: { type: String, require: true },
    idCategory: { type: String, require: true },
    description: { type: String, require: false },
    url: { type: String, require: true },
    poster: { type: String, require: true },
    duration: { type: String, require: false },
    views: { type: Number, require: false}
  },
  {
    timestamps: true,
  }
);

export default MongooseModel<MovieModel>('Movie', movieSchema)
