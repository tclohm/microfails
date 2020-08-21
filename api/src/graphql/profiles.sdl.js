export const schema = gql`
  type Profile {
    id: Int!
    name: String!
    username: String!
    user: User!
    userId: Int!
  }

  type Query {
    profiles: [Profile!]!
    profile(id: Int!): Profile!
  }

  input CreateProfileInput {
    name: String!
    username: String!
    userId: Int!
  }

  input UpdateProfileInput {
    name: String
    username: String
    userId: Int
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile!
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile!
    deleteProfile(id: Int!): Profile!
  }
`
