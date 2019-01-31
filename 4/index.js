/* ticket 718: 
    Database team called, Send Request keys have changed again. 
    key1, k should be j
    key 12, b should be a string
*/


function sendFullRequest(fullRequest) {
  /* database.send(fullRequest); */
}

sendFullRequest({ key: 'key1', k: 12 })
sendFullRequest({ key: 'key12', b: 12 })