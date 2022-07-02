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

export interface IAlbum {
  id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}

export interface ITrack {
  id: string;
  title: string;
  albumId: string;
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

export interface IFavorite {
  id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export interface IContext {
  token: string
}

export interface IFavouriteTrack {
  id: string;
  type: string;
}

export interface IId {
  _id: string
}
