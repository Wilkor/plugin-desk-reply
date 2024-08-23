import api from '../BaseAuth';

export default (config, flag) => {

  return api.post('/api-hub/schedule/create/config', config,{
  headers: {
    'Content-Type': 'application/json',
    'update': flag
  }})
}