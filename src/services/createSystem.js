import api from '../BaseAuth';

 export default  (body, token) => {

    return api.post('/api-system-extension/create', body, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}
