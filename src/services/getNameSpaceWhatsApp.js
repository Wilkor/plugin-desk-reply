import api from '../baseUrl';

export default (guid, key) => {

 
  return api.post('/commands', {

    "id": guid,
    "method": "get",
    "to": "postmaster@wa.gw.msging.net",
    "uri": "/whatsapp-business-account"
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': key
    }
  });
}