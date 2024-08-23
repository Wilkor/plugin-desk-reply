import api from '../BaseAuth';

 export default  (contract, app) => {

    return api.get(`/api-hub/schedule/list/config/${contract}/?app=${app}`, null, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
