import api from '../BaseAuth';

export default (contract, key, email) => {

    return api.delete(`/api-hub/schedule/template/sector/${contract}/${key}/${email}`)
}
