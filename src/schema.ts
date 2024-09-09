export const typeDefs = `#graphql
type User {
id: ID!
name: String!
email: String!
}
type Post {
id: ID!
user: User!
title: String!
content: String
post_date: String!
}
type Query {
users: [User]
user(id: ID!): User
posts: [Post]
post(id: ID!): Post
}
type Mutation {
createUser(user: UserInput!): User
deleteUser(id: ID!): [User]
updateUser(id: ID!, edits: UserUpdate!): User
createPost(post: PostInput!): Post
}
input UserInput {
name: String!
email: String!
}

input UserUpdate {
name: String
email: String
}

input PostInput {
user_id: String!
title: String!
date: String
content: String
}
`;
