import api from '../baseUrl';

export default (guid, key, action ) => {

 
  return api.post('/commands', {

    "id": guid,
    "to": "postmaster@analytics.msging.net",
    "method": "set",
    "type": "application/vnd.iris.eventTrack+json",
    "uri": "/event-track",
    "resource": {
      "category": 'Disparo WhatsApp',
      "action": action
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': key
    }
  });
}