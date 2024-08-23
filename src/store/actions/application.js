import * as action_types from '../../constants/application-actions';

const setApplication = (payload) => ({
    type: action_types.set_application,
    payload
});

const setTemplates = (payload) => ({
    type: action_types.set_templates,
    payload
});

const setSubBots = (payload) => ({
    type: action_types.set_subbots,
    payload
});

const setWabaNamespace = (payload) => ({
    type: action_types.set_wabanamespace,
    payload
});

export { setApplication, setTemplates, setSubBots, setWabaNamespace };
