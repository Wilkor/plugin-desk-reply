import api from '../baseUrl';

export default (guid, key) => {

    return api.post('/commands', {
        "method": "get",
        "to": "postmaster@desk.msging.net",
        "uri": "/attendants?$skip=0&$take=999999",
        "id": guid
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': key
        }
    });
}