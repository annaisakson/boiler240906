import { Pool } from "pg";
import { UserInputType } from "../../types/userTypes";

export const newUser = async (pool: Pool, user: UserInputType) => {
  try {
    const { name, email } = user;

    const result = await pool.query(
      'INSERT INTO "user"(name, email) VALUES($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in Mutation:createUser resolver: ", error);
    throw error;
  }
};

export const removeUser = async (pool: Pool, ID: Number) => {
  try {
    await pool.query('DELETE FROM "user" WHERE id= $1', [ID]);
    const result = await pool.query('SELECT * FROM "user"');
    return result.rows;
  } catch (error) {
    console.error("Error in Mutation:deleteUser resolver: ", error);
    throw error;
  }
};

export const editUser = async (
  pool: Pool,
  id: number,
  edits: Partial<UserInputType>
) => {
  try {
    const userToUpdate = await pool.query('SELECT * FROM "user" WHERE id= $1', [
      id,
    ]);

    const currentUser = userToUpdate.rows[0];

    if (!currentUser) {
      throw new Error(`User with id ${id} not found`);
    }
    const updatedUser = { ...currentUser, ...edits };
    const { name, email } = updatedUser;

    const result = await pool.query(
      'UPDATE "user" SET name= $1, email =$2 WHERE id= $3 RETURNING *',
      [name, email, id]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error in Mutation:editUser resolver: ", error);
    throw error;
  }
};
