import api from '../BaseAuth';

 export default  (body) => {

    return api.post('/api-flow-by-tags/flow', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
