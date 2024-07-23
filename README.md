# gRPC Microservice example with NestJS

I write this example to get a starter project based on gRPC microservices with NestJS. 

Folders:
- `micro-svc` is the gRPC service
- `client-svc` is the client which communicate with the gRPC sercice and it exposes a basic REST API

## Requirements

If not installed, install protobuf

```sh
# MacOS
brew install protobuf
```

Now it will be possible to generate services from proto file. For example:

```sh
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,nestJs=true,addGrpcMetadata=true --ts_proto_out=. ./src/proto/hello.proto
```