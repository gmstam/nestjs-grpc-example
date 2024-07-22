# Client SVC

## Requirements

If not installed, install via NPM the following:

```sh
npm install -g @nestjs/cli pnpm
```

## Build

```sh
# Download Dependencies
pnpm install 

# Then
pnpm run build
```

## Start Development mode

First, start the `micro-svc` project. Then, run from the `client-svc` folder:

```sh
pnpm run start:dev
```

## Health Check

To verify it is working

```sh
curl http:/localhost:50055
```

The response will be

```json
{ "message": "ciao" }
```

