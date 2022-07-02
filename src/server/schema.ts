import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
  getBands: [Band],
  getArtists: [Artist],
  getUsers: User,
  getGenres: [Genre],
  getAlbums: [Album],
  getTracks: [Track],
  getFavourites: [Favourites],
  getBand(id: String!): Band
  getUser(id: String!): User
  getAlbum(id: String!): Album
  getArtist(id: String!): Artist
  getGenre(id: String!): Genre
  getTrack(id: String!): Track
  getFavourite(id: String!): Favourites

}


type Mutation {
  register(firstName: String!, lastName: String!, password: String!, email: String!): User
  login(email: String!, password: String!): Jwt

  createBand(name: String!, origin: String, website: String, genres: [String]): Band
  updateBand(id: ID!, name: String!, origin: String, website: String, genresIds: [String]): Band
  deleteBand(id: String!): Band

  createArtist(firstName: String!, secondName: String!, middleName: String, birthDate: String, birthPlace: String, country: String!, bands: [String], instruments: [String]): Artist
  updateArtist(id: ID!, firstName: String, secondName: String, middleName: String, birthDate: String, birthPlace: String, country: String, bands: [String], instruments: [String]): Artist
  deleteArtist(id: ID!): Artist

  createGenre(name: String!, description: String, country: String, year: Int): Genre
  updateGenre(name: String, description: String, country: String, year: Int): Genre
  deleteGenre(id: String!): Genre

  createAlbum(name: String!, released: String, artistsIds: [ID], bandsIDS: [ID], trackIds: [ID], genresIds: [ID]): Album
  updateAlbum(id: ID!, name: String, released: String, artistsIds: [String], bandsIds: [String], trackIds: [String], genresIds: [String]): Album
  deleteAlbum(id: ID!): Album

  createTrack(title: String!, albumId: String, bandsIds: [String], artistsIds: [String], duration: Int!, released: Int!, genresIds: [String!]): Track
  updateTrack(title: String!, albumId: String, bandsIds: [String], artistsIds: [String], duration: Int!, released: Int!, genresIds: [String!]): Track
  deleteTrack(id: String!): Track

  addTrackToFavourites(id: String!, type: String!): Favourites
  addBandToFavourites(id: String!, type: String!): Favourites
  addArtistToFavourites(id: String!, type: String!): Favourites
  addGenreToFavourites(id: String!, type: String!): Favourites

  deleteTrackFromFavourites(id: String!): Favourites
  deleteBandFromFavourites(id: String!): Favourites
  deleteArtistFromFavourites(id: String!): Favourites
  deleteGenreFromFavourites(id: String!): Favourites
}

type Artist {
  id: ID!
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  bands: [ID]
  instruments: String
}
type Band {
  id: ID!
  name: String
  origin: String
  website: String
  genres: [String]
}
type User {
  id: ID!
  firstName: String
  lastName: String
  password: String!
  email: String!
}
type Genre {
  id: ID!
  name: String
  description: String
  country: String
  year: Int
}
type Album {
  id: ID!
  name: String
  released: Int
  artists: [Artist]
  bands: [Band]
  tracks: [Track]
  genres: [Genre]
  image: String
}
type Track {
  id: ID!
  title: String!
  albums: [Album]
  bands: [Band]
  duration: Int
  released: Int
  genres: [Genre]
}
type Favourites {
  userId: String
  bandsIds: [String]
  genresIds: [String]
  artistsIds: [String]
  tracksIds: [String]
}
type Jwt {
  jwt: String!
},
`;
