import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
  getBands: [Band],
  getArtists: [Artist]
  getUsers: User
  getGenre: [Genre]

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
  members: String
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
type Jwt {
  jwt: String!
},
`;
