# create-cleanslice

Scaffold a new full-stack project with [CleanSlice](https://cleanslice.org) architecture.

## Usage

```bash
npx create-cleanslice my-app
cd my-app
```

This creates a project with:

- **api/** — NestJS backend on **Prisma 8** (each slice owns its `*.prisma`, `prisma.config.ts` globs them, migrations are applied by `bun run db:deploy`; see [Prisma Setup](https://github.com/CleanSlice/mcp/blob/main/docs/01-setup/api-prisma.md)), Swagger, and vertical slices, including the `setup/id` slice: every primary key is `<prefix>-<adjective>-<noun>-<12 Crockford>`, minted by the gateway with `formatId(prefix)` (see [Identifiers](https://cleanslice.org/standards/identifiers))
- **app/** — Nuxt 3 frontend with Vue 3, Pinia, Tailwind CSS, and shadcn-vue

## Next Steps

```bash
# Start the backend (Docker runs PostgreSQL and Mailpit; `bun run dev` applies the migrations)
cd api && cp .env.example .env.dev && bun install && bun run dev

# Start the frontend (in another terminal)
cd app && bun install && bun run dev
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
