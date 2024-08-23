import api from '../BaseAuth';

export default (contract) => {

    return api.get(`/api-hub/schedule/sector/${contract}`)
}
