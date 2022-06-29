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

  _id: string;
  name: string;
  origin: string;
  membersId: string[];
  website: string;
  genresIds: string[];

}
