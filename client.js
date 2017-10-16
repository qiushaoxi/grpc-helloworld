var PROTO_PATH = __dirname + '/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

function main() {
    var client = new hello_proto.EchoService('localhost:50051',
        grpc.credentials.createInsecure());
    var input;
    if (process.argv.length >= 3) {
        input = process.argv[2];
    } else {
        input = 'hello';
    }
    client.echo({ input: input }, function (err, response) {
        console.log('echo message:', response.output);
    });
}

main();
