import { Pool } from "pg";
import { User, UserInputType } from "./types/userTypes";
import { Post, PostInputType } from "./types/postTypes";
import { getUsers, getUserById } from "./queries/users/userQueries";
import { newUser, removeUser, editUser } from "./queries/users/userMutations";
import { getPostById, getPosts } from "./queries/posts/postQueries";
import { newPost } from "./queries/posts/postMutation";

const createResolvers = (pool: Pool) => ({
  Query: {
    users: async (): Promise<User[]> => getUsers(pool),

    user: async (_: any, args: { id: number }): Promise<User | null> =>
      getUserById(pool, args.id),

    posts: async (): Promise<Post[]> => getPosts(pool),

    post: async (_: any, args: { id: number }): Promise<Post | null> =>
      getPostById(pool, args.id),
  },

  Mutation: {
    createUser: async (_: any, args: { user: UserInputType }): Promise<User> =>
      newUser(pool, args.user),
    deleteUser: async (_: any, args: { id: number }): Promise<User[]> =>
      removeUser(pool, args.id),
    updateUser: async (
      _: any,
      args: { id: number; edits: Partial<UserInputType> }
    ): Promise<User> => editUser(pool, args.id, args.edits),

    createPost: async (_: any, args: { post: PostInputType }): Promise<Post> =>
      newPost(pool, args.post),
  },
  Post: {
    user(parent: any) {
      return getUserById(pool, parent.id);
    },
  },
  // Lägg till relationer med parent här
});
export default createResolvers;
