import api from '../BaseAuth';

 export default  (contract,tag) => {

    return api.get(`/api-flow-by-tags/flow/log?contract=${contract}&tag=${tag}`)
}
