import api from '../BaseAuth';

 export default  (contract, key) => {

    return api.delete(`/api-hub/schedule/template/sector/${contract}/${key}`)
}
