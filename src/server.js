const http = require('http');
const htmlHandler = require('./htmlResponse.js');
const mediaHandler = require('./mediaResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
	case '/page2':
      htmlHandler.getIndex(request, response);
      break;
	case '/page3':
      htmlHandler.getIndex(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listen on 127.0.0.1: ${port}`);

