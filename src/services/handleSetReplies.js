import api from '../baseUrl';

export default (resource, key, idReplies) => {
  return api.post('/commands',{ 
    "id": "7e9045d2-1522-42ff-979b-393860be9186",
    "method": "set",
    resource,
    "to": "postmaster@desk.msging.net",
    "type": "application/vnd.lime.collection+json",
    "uri": `/replies/${idReplies}`
    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': key
  }});
}