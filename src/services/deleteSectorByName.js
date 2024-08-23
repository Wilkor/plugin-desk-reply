import api from '../BaseAuth';

export default (contract, name) => {

    return api.delete(`/api-hub/schedule/sector/${contract}/${name}`)
}
