import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
  getBand: [Band]
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
  genres: String
}
`;
