import api from '../baseUrlNotification';

export default (body, identifier, accessKey) => {

  return api.post('/api/v1/Notification', body, {
    headers: {
      'Content-Type': 'application/json',
      identifier,
      accessKey
    }
  });
}