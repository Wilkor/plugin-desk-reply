import api from '../baseUrl';

export default (guid, key, idReplies = '' ) => {
  
  return api.post('/commands',{

    "id": guid,
    "to": "postmaster@desk.msging.net",
    "method": "get",
    "uri": `/replies/${idReplies}`
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
      }});
}