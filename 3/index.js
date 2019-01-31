/* ticket 5239: 
    Database team called, Send Request keys have changed again. 
    key1 is now key9
    key3 is deprecated
*/


function sendRequest(key, message) {
  /* database.send(key,message); */
}

sendRequest('key1', 'hi1')
sendRequest('key12', 'hi2')
sendRequest("key1", 'hi3')
sendRequest(`key1`, 'hi3')
const key = 'key1';
sendRequest(key, 'hi3')
sendRequest('key4', 'hi4')
sendRequest('key3', 'hi4')