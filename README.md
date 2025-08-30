# sqlite-mcp

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "bunx sqlite-mcp@latest",
      "env": {
        "DATABASE_URL": "/path/to/db.sqlite"
      }
    }
  }
}
```

## Notes

`DATABASE_URL` supports file path or [LibSQL](https://docs.turso.tech/libsql) connection string.

## License

MIT
