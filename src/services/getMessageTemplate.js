import api from '../baseUrl';

export default (guid, key ) => {

  return api.post('/commands',{

    "id": guid,
    "to": "postmaster@wa.gw.msging.net",
    "method": "get",
    "uri": "/message-templates"
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      }});
}