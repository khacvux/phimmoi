export interface userModel{
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    token: string
}

export interface watchedMoviesModel{
    poster: string,
    id: string,
    onTopView: boolean,
    name: string,
}

export interface loginInput{
    username: string,
    password: string
}

export interface signupInput{
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    contactNumber: string,
}