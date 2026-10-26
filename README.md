# create-cleanslice

Scaffold a new full-stack project with [CleanSlice](https://cleanslice.org) architecture.

## Usage

```bash
npx create-cleanslice my-app
cd my-app
```

This creates a project with:

- **api/** — NestJS backend with Prisma, Swagger, and vertical slices, including the `setup/id` slice: every primary key is `<prefix>-<adjective>-<noun>-<12 Crockford>`, minted by the gateway with `formatId(prefix)` (see [Identifiers](https://cleanslice.org/standards/identifiers))
- **app/** — Nuxt 3 frontend with Vue 3, Pinia, Tailwind CSS, and shadcn-vue

## Next Steps

```bash
# Start the backend
cd api && npm install && npm run dev

# Start the frontend (in another terminal)
cd app && npm install && npm run dev
```

Set up [Claude Code](https://docs.anthropic.com/en/docs/claude-code) with the CleanSlice MCP server:

```bash
claude mcp add --scope user --transport http cleanslice https://mcp.cleanslice.org/mcp
```

## Links

- [Documentation](https://cleanslice.org)
- [Starter Kit](https://github.com/CleanSlice/nest-nuxt-starter-kit)
- [GitHub](https://github.com/CleanSlice)

## License

MIT
