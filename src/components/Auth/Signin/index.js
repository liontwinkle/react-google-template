import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter, Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as actions from '../../../constants/action_types';
import * as routes from '../../../constants/routes';
import './Signin.css';

function Signin(props) {
    const { register, handleSubmit, formState, errors, setError } = useForm();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const submit = async (formData) => {
        console.log('formData', formData);
        setLoading(true);

        try {
            const requestBody = {
                username: formData.username,
                password: formData.password
            };

            const { data } = await axios.post('https://api.commandpost.com.au/auth/signin', requestBody);
            // const { data } = await axios.post('http://localhost:4000/auth/signin', requestBody); // dev env, need to setup env later
            setLoading(false);
            
            dispatch({
                type: actions.SET_AUTH_USER,
                authUser: data
            })
            props.history.push(routes.HOME);
        }
        catch (e) {
            if (e.response.data.error && e.response.data.type === 'validation') {
                setError(e.response.data.field, e.response.data.type, e.response.data.message);
                setLoading(false);
            } else {
                console.log("Unexpected error: Signin:submit");
            }
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
                    <Form onSubmit={handleSubmit(submit)}>
                      <Form.Group controlId="username">
                        <Form.Label>Email address</Form.Label>
                        { /* eslint-disable-next-line */ }
                        <Form.Control name="username" type="text" placeholder="yourname@yourmail.com" ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} className={errors.username ? "parsley-error" : (formState.isSubmitted && formState.touched.username && "parsley-success")} />
                        {errors.username && errors.username.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                        {errors.username && errors.username.type === "pattern" && (<div className="parsley-errors-list filled mt-1">This value should be a valid email.</div>)}
                        {errors.username && errors.username.type === "validation" && (<div className="parsley-errors-list filled mt-1">{errors.username.message}</div>)}
                      </Form.Group>
                      <Form.Group controlId="password">
                        <div className="d-flex justify-content-between mg-b-5">
                          <Form.Label className="mg-b-0-f">Password</Form.Label>
                          <Link className="tx-13" to={routes.FORGOT_PASSWORD}>Forgot password?</Link>
                        </div>
                        <Form.Control name="password" type="password" placeholder="Enter your password" ref={register({ required: true })} className={errors.password ? "parsley-error" : (formState.isSubmitted && formState.touched.password && "parsley-success")} />
                        {errors.password && errors.password.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                        {errors.password && errors.password.type === "validation" && (<div className="parsley-errors-list filled mt-1">{errors.password.message}</div>)}
                      </Form.Group>
                      <Button variant="brand-02" block={true} type="submit">
                        {loading ? (
                            <>
                                <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                <span>Processing</span>
                            </>
                        ) : 'Sign In'}
                      </Button>
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
