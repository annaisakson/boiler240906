import { Pool } from "pg";
import { PostInputType } from "../../types/postTypes";

// export const newPost = async (pool: Pool, post: PostInputType) => {
//   try {
//     const { user, title, content, post_date } = post;

//     const result = await pool.query(
//       "INSERT INTO post(user, title, content, post_date) VALUES($1, $2, $3,$4) RETURNING *",
//       [user.id, title, content, post_date]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Error in Mutation:createUser resolver: ", error);
//     throw error;
//   }
// };
