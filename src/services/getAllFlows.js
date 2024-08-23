import api from '../BaseAuth';

 export default  (contract,identifier) => {

    return api.get(`/api-flow-by-tags/flow/all/${contract}/identifier/${identifier}`)
}
