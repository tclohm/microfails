export const schema = gql`
	type User {
		id: Int!
		profile: Profile
		email: String!
		hashedPassword: String
		post: [Post]!
	}

	type Query {
		users: [User!]!
		user(id: Int!): User!
	}

	input CreateUserInput {
		email: String!
		hashedPassword: String
	}

	input UpdateUserInput {
		email: String!
		hashedPassword: String
	}

	type Mutation {
		createUser(input: CreateUserInput!): User!
		updateUser(id: Int!, input: UpdateUserInput!): User!
		deleteUser(id: Int!): User!
	}
`