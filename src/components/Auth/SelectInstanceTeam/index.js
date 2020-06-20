import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as loginSteps from '../../../constants/login_steps';
import Instances from './instances';
import Teams from './teams';
import Signout from '../Signout';

import {
    setAuthUser,
    setLoginStep,
    setSessionData,
    verifyToken,
    updateUser,
    getTrainingCount,
} from '../../../redux/action/session';

import { setSessionExpiryModalState } from '../../../redux/action/themeConfigs';

import '../Auth.css';

function SelectInstanceTeam({
    setAuthUser,
    setLoginStep,
    setSessionData,
    verifyToken,
    updateUser,
    getTrainingCount,
    setSessionExpiryModalState,
    sessionData,
    authUser,
}) {

    const { register, handleSubmit, formState, errors, setValue } = useForm();
    const [loading, setLoading] = useState(false);
    const [idInstance, setIdInstance] = useState(sessionData ? sessionData.id_instance : null);
    const [idEvent, setIdEvent] = useState(sessionData ? sessionData.id_event : null);
    const [idTeam, setIdTeam] = useState(sessionData ? sessionData.id_team : null);

    const changeInstanceHandler = async (event) => {
        let id_instance = event.target.value;
        let id_event = event.target.options[event.target.selectedIndex].getAttribute('idevent') ? event.target.options[event.target.selectedIndex].getAttribute('idevent') : false;
        setIdTeam(null);

        // check session
        verifyToken()
            .then(() => {
                // functionality start
                setIdInstance(id_instance);
                setIdEvent(id_event);
                // set sessionData data
                setSessionData({
                    id_instance: id_instance,
                    id_team: null,
                    id_event: id_event
                });
                // end of functionality
            })
            .catch(() => {
                // open session expiry modal
                setSessionExpiryModalState(true);
            })
    }

    const changeTeamHandler = async (event) => {
        let id_team = event.target.value;

        // check session
        verifyToken()
            .then(() => {
                // functionality start
                setIdTeam(id_team);
                // set sessionData data
                setSessionData({
                    id_instance: idInstance,
                    id_team: id_team,
                    id_event: idEvent
                })
            }).catch((error) => {
                console.log('error: ', error); // fixme
                setSessionExpiryModalState(true);
            });
    }

    const submit = async (formData) => {
        setLoading(true);

        if (formData.id_instance === "new_instance") {
            setTimeout(() => {
                // set loginStep data, will redirect to required route automatically
                setLoginStep(loginSteps.CREATE_NEW_INSTANCE);
            }, 2000);
            return;
        }

        const requestBody = {
            role: formData.role,
            company: formData.company,
            contact_number: formData.contact_number
        };

        // update user data
        updateUser(requestBody)
            .then(() => {
                setSessionData({
                    id_instance: idInstance,
                    id_team: idTeam,
                    id_event: idEvent
                })
                getTrainingCount(loginSteps);
                setLoading(false);
            })
            .catch((e) => {
                setSessionExpiryModalState(true);
                setLoading(false);
                return;
            })
    }

    return (
        <>
            <div className="content content-fixed content-auth">
                <Container>
                    <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
                        <div className="sign-wrapper">
                            <div className="wd-100p">
                                <h3 className="tx-color-01 mg-b-5">Select Instance</h3>
                                <p className="tx-color-03 tx-16 mg-b-40">Select your Instance and team to continue.</p>
                                <Form onSubmit={handleSubmit(submit)}>
                                    <Instances
                                        userId={authUser.id}
                                        idInstance={idInstance}
                                        changeInstanceHandler={changeInstanceHandler}
                                        register={register}
                                        formState={formState}
                                        errors={errors}
                                        setValue={setValue}
                                    />
                                    {
                                        idInstance && idInstance !== "new_instance" && idEvent ? (
                                            <>
                                                <Teams
                                                    idInstance={idInstance}
                                                    idEvent={idEvent}
                                                    idTeam={idTeam}
                                                    changeTeamHandler={changeTeamHandler}
                                                    register={register}
                                                    formState={formState}
                                                    errors={errors}
                                                    setValue={setValue}
                                                />

                                                <Form.Group controlId="role">
                                                    <Form.Label>Role <span className="tx-danger">*</span></Form.Label>
                                                    <Form.Control defaultValue={authUser.role} name="role" type="text" placeholder="Enter your role" ref={register({ required: true })} className={errors.role ? "parsley-error" : (formState.isSubmitted && formState.touched.role && "parsley-success")} />
                                                    {errors.role && errors.role.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                                                </Form.Group>
                                                <Form.Group controlId="company">
                                                    <Form.Label>Agency / Company Name <span className="tx-danger">*</span></Form.Label>
                                                    <Form.Control defaultValue={authUser.company} name="company" type="text" placeholder="Enter company name" ref={register({ required: true })} className={errors.company ? "parsley-error" : (formState.isSubmitted && formState.touched.company && "parsley-success")} />
                                                    {errors.company && errors.company.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                                                </Form.Group>
                                                <Form.Group controlId="contact_number">
                                                    <Form.Label>Contact number <span className="tx-danger">*</span></Form.Label>
                                                    { /* eslint-disable-next-line */}
                                                    <Form.Control defaultValue={authUser.contact_number} name="contact_number" type="text" placeholder="Enter your contact number" ref={register({ required: true, pattern: /^\d+$/ })} className={errors.contact_number ? "parsley-error" : (formState.isSubmitted && formState.touched.contact_number && "parsley-success")} />
                                                    {errors.contact_number && errors.contact_number.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                                                    {errors.contact_number && errors.contact_number.type === "pattern" && (<div className="parsley-errors-list filled mt-1">This value should be digits.</div>)}
                                                </Form.Group>
                                            </>
                                        ) : <></>
                                    }
                                    <Button variant="brand-02" block={true} type="submit">
                                        {loading ? (
                                            <>
                                                <Spinner size="sm" animation="grow" className="mr-2" />
                                                <span>Processing</span>
                                            </>
                                        ) : 'Continue'}
                                    </Button>
                                </Form>
                                <div className="tx-13 mg-t-20 tx-center">Something is wrong? <Signout /></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

SelectInstanceTeam.propTypes = {
    setAuthUser: PropTypes.func.isRequired,
    setLoginStep: PropTypes.func.isRequired,
    setSessionData: PropTypes.func.isRequired,
    verifyToken: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    getTrainingCount: PropTypes.func.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired,
    sessionData: PropTypes.object,
    authUser: PropTypes.object
}

SelectInstanceTeam.defaultProps = {
    sessionData: {},
    authUser: {},
}
const mapStateToProps = (store) => ({
    sessionData: store.sessionData.sessionData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setAuthUser,
    setLoginStep,
    setSessionData,
    verifyToken,
    updateUser,
    getTrainingCount,
    setSessionExpiryModalState,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(SelectInstanceTeam));