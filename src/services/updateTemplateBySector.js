import api from '../BaseAuth';

export default (contract, id, body) => {

    return api.put(`/api-hub/schedule/sector/${contract}/${id}`, body)
}
