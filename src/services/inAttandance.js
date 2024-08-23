import api from '../BaseAuth';

const GetPhoneInAttandance = (body) => {

    return api.post('/api-parse-notification/attendance', body, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default { GetPhoneInAttandance };