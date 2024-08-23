import api from '../BaseAuth';

 export default  (body, meth) => {

    return api[meth]('/api-hub/schedule/template/sector/one', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
