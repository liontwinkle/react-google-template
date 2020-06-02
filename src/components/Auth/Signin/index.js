import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter, Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import * as actions from '../../../constants/action_types';
import * as routes from '../../../constants/routes';
import './Signin.css';

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

            const { data } = await axios.post('https://api.commandpost.com.au/auth/signin', requestBody);

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
          <div className="content content-fixed content-auth">
            <Container>
              <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
                <div className="sign-wrapper">
                  <div className="wd-100p">
                    <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                    <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
                    <Form onSubmit={submit}>
                      <Form.Group controlId="username">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="yourname@yourmail.com" value={username} onChange={handleChange(setUsername)} />
                      </Form.Group>
                      <Form.Group controlId="password">
                        <div className="d-flex justify-content-between mg-b-5">
                          <Form.Label className="mg-b-0-f">Password</Form.Label>
                          <Link className="tx-13" to={routes.FORGOT_PASSWORD}>Forgot password?</Link>
                        </div>
                        <Form.Control type="password" placeholder="Enter your password" onChange={handleChange(setPassword)} />
                      </Form.Group>
                      <Button variant="brand-02" block={true} type="submit">{loading ? "Processing" : "Sign In"}</Button>
                    </Form>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </>
    )
}

export default withRouter(Signin);
