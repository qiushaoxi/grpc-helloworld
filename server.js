var PROTO_PATH = __dirname + '/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function echo(call, callback) {
    callback(null, { output: call.request.input })
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    var server = new grpc.Server();
    server.addService(hello_proto.EchoService.service, { echo: echo });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('grpc server running on 50051.');
}

main();
