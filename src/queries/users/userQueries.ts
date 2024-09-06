import { Pool } from "pg";

export const getUsers = async (pool: Pool) => {
  try {
    const result = await pool.query('SELECT * FROM "user"');
    return result.rows;
  } catch (error) {
    console.error("Error in Query:users resolver: ", error);
    throw error;
  }
};

export const getUserById = async (pool: Pool, id: number) => {
  try {
    {
      const result = await pool.query('SELECT * FROM "user" WHERE id = $1', [
        id,
      ]);
      return result.rows[0] || null;
    }
  } catch (error) {
    console.error("Error in Query:user resolver: ", error);
    throw error;
  }
};
