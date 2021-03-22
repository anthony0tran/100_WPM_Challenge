import * as functions from 'firebase-functions';
import * as corsAnywhere from './cors-anywhere-master/lib/cors-anywhere';

const corsProxy = corsAnywhere.createServer({
  // requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: [
    'cookie',
    'cookie2',
  ],
  // See README.md for other options
});

const cors = require('cors')({origin: true});

export const proxyWithCorsAnywhere = functions.region('europe-west1').https.onRequest((request, response) => {
  cors(request, response, () => {
    corsProxy.emit('request', request, response);
  });
});
