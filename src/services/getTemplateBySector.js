import api from '../BaseAuth';

 export default  (contract, key) => {

    return api.get(`/api-hub/schedule/template/sector/${contract}/${key}`)
}
