import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import * as routes from '../../../constants/routes';

import {
  signInAuth,
  setAuthUser,
  setLoginStep,
  setSessionData,
  setSessionExpiryModalState,
} from '../../../redux/action';


import '../Auth.css';

function Signin({
  setAuthUser,
  signInAuth,
  setLoginStep,
  setSessionData,
  setSessionExpiryModalState,
}) {
  const { register, handleSubmit, formState, errors, setError } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = async (formData) => {

    // unset authUser data
    setAuthUser(null);
    // unset loginStep data
    setLoginStep(false);
    // unset sessionData data
    setSessionData(null);
    // will redirect to required route related with sessions unset
    // close session expiry modal
    setSessionExpiryModalState(false);

    setLoading(true);

    try {
      const requestBody = {
        username: formData.username,
        password: formData.password
      };

      signInAuth(requestBody);

      setLoading(false);
    }
    catch (e) {
      if (e.response && e.response.data.error && e.response.data.type === 'validation') {
        setError(e.response.data.field, e.response.data.type, e.response.data.message);
        setLoading(false);
      } else {
        console.log("Unexpected error: Signin:submit", e);
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
                    { /* eslint-disable-next-line */}
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
                        <Spinner size="sm" animation="grow" className="mr-2" />
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

Signin.propTypes = {
  setAuthUser: PropTypes.func.isRequired,
  signInAuth: PropTypes.func.isRequired,
  setLoginStep: PropTypes.func.isRequired,
  setSessionData: PropTypes.func.isRequired,
  setSessionExpiryModalState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthUser,
  signInAuth,
  setLoginStep,
  setSessionData,
  setSessionExpiryModalState
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Signin));
