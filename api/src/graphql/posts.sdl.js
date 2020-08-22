export const schema = gql`
  type Post {
    id: Int!
    title: String!
    description: String
    imageURL: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    effort: String
    result: String
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    description: String
    imageURL: String!
    effort: String
    result: String
  }

  input UpdatePostInput {
    title: String
    description: String
    imageURL: String
    effort: String
    result: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
