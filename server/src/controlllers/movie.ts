import { Request, Response } from "express";
import mongoose from "mongoose";
import IResponse from "../models/response";
import { deleteFile, uploadFile } from "../../libs/s3Client";
import Movie, { MovieModel, infoMovieModel } from "../models/movie";
import Category from "../models/categoryMovie";
import config from "../config/config";

const add = async (req: any, res: Response) => {
  try {
    const { name, description, category } = req.body;
    const movieFile = req.files.movieFile[0];
    const poster = req.files.poster[0];
    if (
      movieFile.mimetype.substr(0, 5) != "video" ||
      poster.mimetype.substr(0, 5) != "image"
    ) {
      const error: IResponse = {
        successful: false,
        message: "Invalid type!",
        data: null,
      };
      return res.status(400).json(error);
    }
    //PUT MOVIE AND POSTER
    const movieUrl = await uploadFile(movieFile);
    const posterUrl = await uploadFile(poster);

    const idMovie = new mongoose.Types.ObjectId();

    const newMovie: MovieModel = new Movie({
      idMovie,
      name,
      idCategory: category,
      description,
      movieUrl: movieUrl as string,
      movieFilename: movieFile.filename,
      posterUrl: posterUrl as string,
      posterFilename: poster.filename,
      duration: "",
      view: 0,
    });
    await newMovie.save();
    const response: IResponse = {
      successful: true,
      message: "added",
      data: null,
    };
    return res.status(200).json(response);
  } catch (error) {
    const e: IResponse = {
      successful: false,
      message: `Error: ${error}`,
      data: null,
    };
    console.log(e);
    return res.status(400).json(e);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const idMovie = req.params.id;
    const existingMovie = await Movie.findOne({ idMovie });
    const error: IResponse = {
      successful: false,
      message: "Movie does not existing",
      data: null,
    };
    if (!existingMovie) return res.status(400).json(error);

    await deleteFile({
      Bucket: config.bucket.name,
      Key: existingMovie.movieFilename,
    });

    await deleteFile({
      Bucket: config.bucket.name,
      Key: existingMovie.posterFilename,
    });

    Movie.deleteOne({ idMovie }, (error: any) => {
      if (error) {
        const e: IResponse = {
          successful: false,
          message: error,
          data: null,
        };
        return res.status(400).json(e);
      } else {
        const response: IResponse = {
          successful: true,
          message: "delete success",
          data: null,
        };
        return res.status(200).json(response);
      }
    });
  } catch (error) {
    const e: IResponse = {
      successful: false,
      message: `Error: ${error}`,
      data: null,
    };
    console.log(e);
    return res.status(400).json(e);
  }
};

const update = () => {};

const search = (req: Request, res: Response) => {};

const listByCategory = async (req: Request, res: Response) => {
  try {
    const idCategory = req.params.id;
    Movie.find({ idCategory })
      .select("idMovie name description movieUrl posterUrl duration views")
      .exec((error, data) => {
        if (error) {
          const e: IResponse = {
            successful: false,
            message: `Error: ${error}`,
            data: null,
          };
          console.log(e);
          return res.status(400).json(e);
        } else {
          const response: IResponse = {
            successful: true,
            message: `ok`,
            data: data,
          };
          return res.status(200).json(response);
        }
      });
  } catch (error) {
    const e: IResponse = {
      successful: false,
      message: `Error: ${error}`,
      data: null,
    };
    console.log(e);
    return res.status(400).json(e);
  }
};

const info = async (req: Request, res: Response) => {
  try {
    const idMovie = req.params.id;
    const existingMovie = await Movie.findOne({ idMovie });
    const error: IResponse = {
      successful: false,
      message: "Movie does not existing",
      data: null,
    };
    if (!existingMovie) return res.status(400).json(error);

    const category = await Category.findOne({
      idCategory: existingMovie.idCategory,
    });

    const response: infoMovieModel = {
      idMovie: existingMovie.idMovie,
      name: existingMovie.name,
      category: category?.name,
      description: existingMovie.description,
      movieUrl: existingMovie.movieUrl,
      posterUrl: existingMovie.posterUrl,
      duration: existingMovie.duration,
      views: 0,
    };
    return res.status(200).json(response);
  } catch (error) {
    const e: IResponse = {
      successful: false,
      message: `Error: ${error}`,
      data: null,
    };
    console.log(e);
    return res.status(400).json(e);
  }
};

export { add, remove, update, search, listByCategory, info };
