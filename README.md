# Gen AI Engineering Workspace

This is a pnpm workspace monorepo for the Gen AI Engineering website.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [pnpm](https://pnpm.io/) (v9 or later recommended)

## Setup

1.  **Install dependencies:**

    ```bash
    corepack enable
    pnpm install
    ```

2.  **Database (Optional):**

    If you want to use the database features, set the `DATABASE_URL` environment variable:

    ```bash
    export DATABASE_URL=postgres://user:password@localhost:5432/dbname
    ```

## Running the Applications

You can run each component using `pnpm --filter`.

### Web Application (Main Site)

```bash
pnpm --filter @workspace/gen-ai-engineering dev
```
Defaults to http://localhost:3000

### API Server

```bash
pnpm --filter @workspace/api-server dev
```
Defaults to http://localhost:8080

### Mockup Sandbox

```bash
pnpm --filter @workspace/mockup-sandbox dev
```
Defaults to http://localhost:3001

## Scripts

- `pnpm build` - Build all packages
- `pnpm typecheck` - Run type checking across the workspace
