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

## Examples

Use it with ChatWise's local database:

```json
{
  "mcpServers": {
    "chatwise_sqlite": {
      "command": "bunx sqlite-mcp@latest",
      "env": {
        "DATABASE_URL": "$HOME/Library/Application Support/app.chatwise/app.db"
      }
    }
  }
}
```

[ Add it to ChatWise (macOS)](https://chatwise.app/mcp-add?json=ewogICJtY3BTZXJ2ZXJzIjogewogICAgImNoYXR3aXNlX3NxbGl0ZSI6IHsKICAgICAgImNvbW1hbmQiOiAiYnVueCBzcWxpdGUtbWNwQGxhdGVzdCIsCiAgICAgICJlbnYiOiB7CiAgICAgICAgIkRBVEFCQVNFX1VSTCI6ICIkSE9NRS9MaWJyYXJ5L0FwcGxpY2F0aW9uIFN1cHBvcnQvYXBwLmNoYXR3aXNlL2FwcC5kYiIKICAgICAgfQogICAgfQogIH0KfQ==) [🪟 Add it to ChatWise (Windows)](https://chatwise.app/mcp-add?json=ewogICJtY3BTZXJ2ZXJzIjogewogICAgImNoYXR3aXNlX3NxbGl0ZSI6IHsKICAgICAgImNvbW1hbmQiOiAiYnVueCBzcWxpdGUtbWNwQGxhdGVzdCIsCiAgICAgICJlbnYiOiB7CiAgICAgICAgIkRBVEFCQVNFX1VSTCI6ICIkSE9NRS9BcHBEYXRhL1JvYW1pbmcvYXBwLmNoYXR3aXNlL2FwcC5kYiIKICAgICAgfQogICAgfQogIH0KfQo=).



## License

MIT
