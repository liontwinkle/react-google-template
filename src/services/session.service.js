import httpService from './http.service';
const authUrl = '/auth';

const SignIn = (requestBody) => httpService
    .post(`${authUrl}/signin`, requestBody)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

const SignOut = () => httpService.get(`${authUrl}/signout`)

const VerifyToken = () => httpService.get(`${authUrl}/verifyToken`)

const UpdateUser = (userData) => httpService.put(`/user`, userData)

const GetTrainingCount = () => httpService.get('/user/trainings_count')
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));


const GetInstancecs = () => httpService.get(`${authUrl}/instances`);

const GetTeams = (idInstance, idEvent) => httpService.get(`${authUrl}/teams/${idInstance}/${idEvent}`);

export default {
    SignIn,
    SignOut,
    VerifyToken,
    GetTrainingCount,
    UpdateUser,
    GetInstancecs,
    GetTeams
};
