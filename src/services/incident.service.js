import httpService from './http.service';

const authUrl = '/incident';

const GetActionTabs = (idEvent, idInstance) => httpService
  .get(`${authUrl}/event/${idEvent}/instance/${idInstance}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response));

const GetUserForIncident = (idEvent, idInstance) => httpService
  .get(`${authUrl}/users/event/${idEvent}/instance/${idInstance}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response));

const GetFieldList = (tabId) => httpService
  .get(`${authUrl}/field/${tabId}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response));

const GetTypeAheadList = (tabId) => httpService
  .get(`${authUrl}/typeahead/${tabId}`)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err.response));

const SaveActionData = (data) => httpService
  .post(`${authUrl}/typeahead/savedata`, data)
  .then(({ data }) => data)
  .catch((err) => Promise.reject(err));

export default {
  GetActionTabs,
  GetTypeAheadList,
  GetFieldList,
  SaveActionData,
  GetUserForIncident,
};
