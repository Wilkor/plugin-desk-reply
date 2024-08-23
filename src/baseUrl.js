import { create } from 'apisauce';
const contract = localStorage.getItem('plugin-tenant-id');
const api = create({
  baseURL: `https://${contract}.http.msging.net`
});


export default api;
