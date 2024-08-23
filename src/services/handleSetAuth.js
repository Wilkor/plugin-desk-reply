import api from '../BaseAuth';

export default (resourceKey) => {

  return api.post('/api-heavy/login/auth',{

      "usuario": resourceKey,
      "email":resourceKey + "@clonebots.com",
      "perfil":"pluginconfig:",
      "area":"ZEtQZM7rXLzWrTcBykfQ",
      "senha":resourceKey
})
}