import 'dart:io';

main() async {
  final server = await HttpServer.bind(InternetAddress.anyIPv4, 8081);

  server.listen((HttpRequest request) {
    request.response.write('Hello from Dart!');
    request.response.close();
  });

  print('Starting server at http://${server.address.host}:${server.port}');
}