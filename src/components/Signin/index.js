import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import * as actions from '../../constants/action_types';
import * as routes from '../../constants/routes';

function Signin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = setter => e => {
        setter(e.target.value);
    }

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const requestBody = {
                username: username,
                password: password
            };

            const { data } = await axios.post('http://localhost:4000/auth/signin', requestBody);

            if (data.error) {
                setError(data.message);
                setLoading(false);
            }
            else {
                setError(null);
                setLoading(false);
                
                dispatch({
                    type: actions.SET_AUTH_USER,
                    authUser: data
                })
                
                props.history.push(routes.HOME);
            }
        }
        catch (e) {
            setError(e.response.data.message);
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Signin</h1>
            <div className="auth-form">
                <form onSubmit={submit}>
                    <input className="form-input" type="username" placeholder="Username" value={username} onChange={handleChange(setUsername)} />
                    <input className="form-input" type="password" placeholder="Password" onChange={handleChange(setPassword)} />

                    <div><span style={{ color: "red" }}>{error || ""}</span></div>

                    <input className="form-submit" type="submit" value={loading ? "Verifying..." : "Signin"} />
                </form>
            </div>
        </>
    )
}

export default withRouter(Signin);
