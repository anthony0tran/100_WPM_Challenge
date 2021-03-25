import * as functions from 'firebase-functions';
import * as corsAnywhere from './cors-anywhere-master/lib/cors-anywhere';

const cors = require('cors')({origin: true});

const corsProxy = corsAnywhere.createServer({
  // requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: [
    'cookie',
    'cookie2',
  ],
  // See README.md for other options
});

export const proxyWithCorsAnywhere = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  return cors(request, response, () => {
    corsProxy.emit('request', request, response);
  });
});
