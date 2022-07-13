export interface LibraryModel {
    name: string;
    posterUrl: string;
    _id: string;
}

export interface ActionLibraryModel extends LibraryModel {
    token: string
}

export interface CheckSaveModel {
    _id: string;
}

export interface ActionCheckSaveModel extends CheckSaveModel{
    token: string;
}