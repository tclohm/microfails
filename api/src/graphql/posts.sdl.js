export const schema = gql`
  type Post {
    id: Int!
    title: String!
    description: String
    createdAt: DateTime!
    user: User!
    userId: Int!
    tag: [Tag]!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    description: String
    userId: Int!
  }

  input UpdatePostInput {
    title: String
    description: String
    userId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
