import api from '../baseUrl';

export default (guid, key, contract, routerName) => {

    return api.post('/commands', {
        "method": "set",
        "uri": `lime://postmaster@analytics.msging.net/configuration?caller=${routerName}@msging.net`,
        "type": "application/json",
        "resource": {
            "Webhook.IsValid": true,
            "Webhook.Url": `https://pontoparse.herokuapp.com/api/v2/api-flow-by-tags/flow/events?contract=${contract}`
        },
        "id": guid

    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': key
        }
    });
}