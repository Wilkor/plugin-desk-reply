import api from '../BaseAuth';

export default (key) => {
  

  return api.get(`/getbot/config?key=61929bc3f4f1730018098918&token=${key}`);

}
