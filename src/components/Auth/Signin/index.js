import React, {useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import {Container, Form, Button, Spinner} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

import * as routes from '../../../constants/routes'

import {
    signInAuth,
    getInstances,
    getTeams,
    resetSessionData
} from '../../../redux/action/session'

import {
    setSessionExpiryModalState,
} from '../../../redux/action/themeConfigs'

import '../Auth.css'

function Signin({
  signInAuth,
  getInstances,
  getTeams,
  resetSessionData,
  setSessionExpiryModalState
}) {
    const [loadingFg, setLoadingFg] = useState(false);
    const {register, handleSubmit, formState, errors, setError} = useForm()

    const submit = async formData => {
        resetSessionData()
        // will redirect to required route related with sessions unset
        // close session expiry modal
        setSessionExpiryModalState(false)

        setLoadingFg(true);

        try {
            const requestBody = {
                username: formData.username,
                password: formData.password
            };

            signInAuth(requestBody).then(() => {
                getInstances().then(() => {
                    getTeams().then(() => {
                        setLoadingFg(false);
                    })
                })
            }).catch(err => {
                setError(
                    err.data.field,
                    err.data.type,
                    err.data.message
                );
                setLoadingFg(false);
            })
        } catch (e) {
            console.log('Unexpected error: Signin:submit', e);
        }
    };

    return (
        <>
            <div className='content content-fixed content-auth'>
                <Container>
                    <div className='media align-items-stretch justify-content-center ht-100p pos-relative'>
                        <div className='sign-wrapper'>
                            <div className='wd-100p'>
                                <h3 className='tx-color-01 mg-b-5'>Sign In</h3>
                                <p className='tx-color-03 tx-16 mg-b-40'>
                                    Welcome back! Please signin to continue.
                                </p>
                                <Form onSubmit={handleSubmit(submit)}>
                                    <Form.Group controlId='username'>
                                        <Form.Label>Email address</Form.Label>
                                        {/* eslint-disable-next-line */}
                                        <Form.Control
                                            name='username'
                                            type='text'
                                            placeholder='yourname@yourmail.com'
                                            ref={register({
                                                required: true,
                                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                            })}
                                            className={
                                                errors.username
                                                    ? 'parsley-error'
                                                    : formState.isSubmitted &&
                                                    formState.touched.username &&
                                                    'parsley-success'
                                            }
                                        />
                                        {errors.username && errors.username.type === 'required' && (
                                            <div className='parsley-errors-list filled mt-1'>
                                                This value is required.
                                            </div>
                                        )}
                                        {errors.username && errors.username.type === 'pattern' && (
                                            <div className='parsley-errors-list filled mt-1'>
                                                This value should be a valid email.
                                            </div>
                                        )}
                                        {errors.username &&
                                        errors.username.type === 'validation' && (
                                            <div className='parsley-errors-list filled mt-1'>
                                                {errors.username.message}
                                            </div>
                                        )}
                                    </Form.Group>
                                    <Form.Group controlId='password'>
                                        <div className='d-flex justify-content-between mg-b-5'>
                                            <Form.Label className='mg-b-0-f'>Password</Form.Label>
                                            <Link className='tx-13' to={routes.FORGOT_PASSWORD}>
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Form.Control
                                            name='password'
                                            type='password'
                                            placeholder='Enter your password'
                                            ref={register({required: true})}
                                            className={
                                                errors.password
                                                    ? 'parsley-error'
                                                    : formState.isSubmitted &&
                                                    formState.touched.password &&
                                                    'parsley-success'
                                            }
                                        />
                                        {errors.password && errors.password.type === 'required' && (
                                            <div className='parsley-errors-list filled mt-1'>
                                                This value is required.
                                            </div>
                                        )}
                                        {errors.password &&
                                        errors.password.type === 'validation' && (
                                            <div className='parsley-errors-list filled mt-1'>
                                                {errors.password.message}
                                            </div>
                                        )}
                                    </Form.Group>
                                    <Button variant='brand-02' block={true} type='submit'>
                                        {loadingFg ? (
                                            <div>
                                                <div className="spinner-grow" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <span className="align-items-center ml-2">Processing</span>
                                            </div>
                                        ) : (
                                            'Sign In'
                                        )}
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
    isLoading: PropTypes.bool,
    signInAuth: PropTypes.func.isRequired,
    getInstances: PropTypes.func.isRequired,
    getTeams: PropTypes.func.isRequired,
    resetSessionData: PropTypes.func.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired
}

Signin.defaultProps = {
    isLoading: false
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            signInAuth,
            getInstances,
            getTeams,
            resetSessionData,
            setSessionExpiryModalState
        },
        dispatch
    )

const mapStateToProps = store => ({
    isLoading: store.themeConfigData.isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin))
