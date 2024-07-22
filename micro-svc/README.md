# Micro SVC

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

```sh
pnpm run start:dev
```

## Health Check

To verify it is working

```sh
grpcurl -plaintext localhost:50051 hello.HelloService/SayHello
```

