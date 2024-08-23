import api from '../baseUrl';

export default (guid, key ) => {
  
  return api.post('/commands',{

    "id": guid,
    "to": "postmaster@desk.msging.net",
    "method": "get",
    "uri": "/attendance-queues?$skip=0&$take=999999"
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      }});
}