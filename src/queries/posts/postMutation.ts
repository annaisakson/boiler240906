import { Pool } from "pg";
import { PostInputType } from "../../types/postTypes";

export const newPost = async (pool: Pool, post: PostInputType) => {
  try {
    const { user_id, title, content, post_date } = post;
    const userExcist = await pool.query('SELECT * FROM "user" WHERE id = $1', [
      user_id,
    ]);

    if (!userExcist.rows[0]) {
      throw new Error("user doesnt excist");
    }
    const result = await pool.query(
      "INSERT INTO post(user_id, title, content, post_date) VALUES($1, $2, $3,$4) RETURNING *",
      [user_id, title, content, post_date]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in Mutation:createUser resolver: ", error);
    throw error;
  }
};
