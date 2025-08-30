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

[🛠️ Add it to ChatWise](https://chatwise.app/mcp-add?json=ewogICJtY3BTZXJ2ZXJzIjogewogICAgInNxbGl0ZSI6IHsKICAgICAgImNvbW1hbmQiOiAiYnVueCBzcWxpdGUtbWNwQGxhdGVzdCIsCiAgICAgICJlbnYiOiB7CiAgICAgICAgIkRBVEFCQVNFX1VSTCI6ICIvcGF0aC90by9kYi5zcWxpdGUiCiAgICAgIH0KICAgIH0KICB9Cn0=).

## Notes

`DATABASE_URL` supports file path or [LibSQL](https://docs.turso.tech/libsql) connection string.

## License

MIT
