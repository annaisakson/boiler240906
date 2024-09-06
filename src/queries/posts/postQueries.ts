import { Pool } from "pg";

export const getPosts = async (pool: Pool) => {
  try {
    const result = await pool.query("SELECT * FROM post");
    return result.rows;
  } catch (error) {
    console.error("Error in Query:posts resolver: ", error);
    throw error;
  }
};

export const getPostById = async (pool: Pool, id: number) => {
  try {
    {
      const result = await pool.query("SELECT * FROM post WHERE id = $1", [id]);
      return result.rows[0] || null;
    }
  } catch (error) {
    console.error("Error in Query:post resolver: ", error);
    throw error;
  }
};
