import api from '../BaseAuth';
export default (body, token) => {

    return api.post('/api-hub/schedule/create/config', body, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}
