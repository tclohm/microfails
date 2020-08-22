export const schema = gql`
  type User {
    id: Int!
    email: String!
    username: String!
    password: String
    post: [Post]!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
    username: String!
    password: String
  }

  input UpdateUserInput {
    email: String
    username: String
    password: String
  }
`
