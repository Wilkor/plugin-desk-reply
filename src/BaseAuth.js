import { create } from 'apisauce';

const api = create({
  baseURL: 'https://pontoparse.herokuapp.com/api/v2',
  //baseURL: 'http://localhost:3333/api/v2'
});

export default api;
