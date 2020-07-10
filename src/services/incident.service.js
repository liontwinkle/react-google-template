import httpService from './http.service';
const authUrl = '/incident';

const GetActionTabs = (id_event, id_instance) => httpService
    .get(`${authUrl}/event/${id_event}/instance/${id_instance}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const GetFieldList = (tabId) => httpService
    .get(`${authUrl}/field/${tabId}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const GetTypeAheadList = (tabId) => httpService
    .get(`${authUrl}/typeahead/${tabId}`)
    .then(({data}) => data)
    .catch((err) => Promise.reject(err.response));

export default {
    GetActionTabs,
    GetTypeAheadList,
    GetFieldList,
};
