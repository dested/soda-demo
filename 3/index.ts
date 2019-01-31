{/* ticket 5239: 
    Database team called, Send Request keys have changed again. 
    key1 is now key9
    key3 is deprecated
*/

  type RequestKeys = 'key1' | 'key2' | 'key3' | 'key4' | 'key12';


  function sendRequest(key: RequestKeys, message: string) {
    /* database.send(key,message); */
  }

  sendRequest('key1', 'hi1')
  sendRequest('key12', 'hi2')
  sendRequest("key1", 'hi3')
  sendRequest(`key1`, 'hi3')
  const key: RequestKeys = 'key1';
  sendRequest(key, 'hi3')
  sendRequest('key4', 'hi4')
  sendRequest('key3', 'hi4')
}