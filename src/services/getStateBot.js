import api from '../baseUrl';

export default (auth, shortName, uuid) => {

  return api.post('/commands', {
    "method": "get",
    "id": uuid,
    "to": "postmaster@builder.msging.net",
    "uri": `/flow/states?shortName=${shortName}`,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    }
  }); 
}