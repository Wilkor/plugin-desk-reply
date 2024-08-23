import api from '../BaseAuth';

 export default  (body) => {

    return api.post('/api-hub/schedule/sector', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
