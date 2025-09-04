import { Client } from "pg";
async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    dartabase: "postgres",
    password: "local_password",
  });
  const result = await client.connect(queryObject);
  await client.end();
  return result;
}
export default {
  query: query,
};
