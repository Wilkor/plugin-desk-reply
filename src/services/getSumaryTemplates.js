import api from '../baseUrl';

export default (auth, resource, uuid) => {

    return api.post('/commands', {
        "id": uuid,
        "to": "postmaster@activecampaign.msging.net",
        "method": "get",
        "uri": `/audience-summary/${resource}`
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    });
}