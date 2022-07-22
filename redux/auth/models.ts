export interface LoginModel {
  email: string;
  password: string;
}

export interface LibraryModel {
  idMovie: any;
  name: string;
  posterUrl: string;
}

export interface ResLoginModel {
  successful: boolean;
  message: string;
  data: null;
  email: string;
  name: string | undefined;
  avatarUrl: string | undefined;
  avatarFilename: string | undefined;
  contactNumber: string | undefined;
  _id: string | undefined;
  library: Array<LibraryModel> | undefined;
  token: string | undefined;
}

export interface SignupModel {
  email: string;
  password: string;
  contactNumber: string;
  name: string;
}
export interface ResSignupModel {
  successful: Boolean;
  message: string;
}

export interface ChangePasswordModel {
  password: string;
  newPassword: string;
}

export interface ActionChangePassModel extends ChangePasswordModel {
  token: string;
}

export interface ChangeNameModel {
  newName: string;
}

export interface ActionChangeNameModel extends ChangeNameModel {
  token: string;
}

export interface SetAvatarModel {
  formData: any;
}

export interface ActionSetAvatarModel extends SetAvatarModel {
  token: string;
}

export interface AccountModel {
  avatarUrl: string;
  name: string;
  email: string;
}