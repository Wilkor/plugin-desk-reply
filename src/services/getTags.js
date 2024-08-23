import api from '../baseUrl';

export default (auth, identitySubBot, uuid) => {

  return api.post('/commands', {
    "method": "get",
    "uri": `lime://${identitySubBot}/buckets/blip%3Adesk%3Atags`,
    "type": "text/plain",
    "id": uuid
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    }
  }); 
}