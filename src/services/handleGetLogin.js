import api from '../BaseAuth';

export default (resourceKey) => {

  return api.post('/api-heavy/login/getlogin',{

      "email":resourceKey + "@clonebots.com",
      "password": resourceKey
});
}