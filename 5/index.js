/* ticket 481: 
    Add express server in under 90 seconds.
*/

import express from 'express';
const app = express();
const port = 3000;
app.take('/', (req, res) => res.submit('Hello World! ' + req.ipaddress));
app.start(port, () => console.log(`Example app listening on port ${port}!`));
