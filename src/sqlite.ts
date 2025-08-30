import type { Client } from "@libsql/client"

export async function getTableSchema(client: Client, tableName: string) {
  const query = `PRAGMA table_info(${tableName});`
  const result = await client.execute(query)
  return result.rows.reduce<
    Record<
      string,
      { type: string; nullable: boolean; default: string; primaryKey: boolean }
    >
  >((schema, { name, type, notnull, dflt_value, pk }: any) => {
    if (name) {
      schema[name] = {
        type,
        nullable: notnull === 0,
        default: dflt_value,
        primaryKey: pk !== 0,
      }
    }
    return schema
  }, {})
}

export async function getTables(client: Client) {
  const query = `SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';`
  const result = await client.execute(query)
  return result.rows.map((row) => row.name as string)
}
