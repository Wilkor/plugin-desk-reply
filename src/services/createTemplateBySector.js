import api from '../BaseAuth';

 export default  (body, token) => {

    return api.post('/api-hub/schedule/template/sector', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
