import api from '../BaseAuth';

 export default  (id) => {

    return api.delete(`/api-flow-by-tags/flow/${id}`)
}
