export interface IArtists {
  id: string,
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  bands: [String]
  instruments: String
}

export interface IBand {
  id?: string;
  name: string;
  origin?: string;
  membersId?: string[];
  website?: string;
  genresIds?: string[];

}

export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  password: string;
  email: string;
}

export interface IGenre {
  id?: string;
  name?: string;
  description?: string;
  country?: string;
  year?: number;
}

export interface IContext {
  token: string
}
