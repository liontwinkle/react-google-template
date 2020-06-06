import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as actions from '../../../constants/action_types';
import * as routes from '../../../constants/routes';
import * as loginSteps from '../../../constants/login_steps';
import Instances from './instances';
import Teams from './teams';
import './SelectInstanceTeam.css';

function SelectInstanceTeam(props) {

    const { register, handleSubmit, formState, errors, setError } = useForm();
    const [loading, setLoading] = useState(false);
    const [idInstance, setIdInstance] = useState(false);
    const [idEvent, setIdEvent] = useState(false);
    const [idTeam, setIdTeam] = useState(false);
    const dispatch = useDispatch();

    const changeInstanceHandler = (event) => {
        setIdInstance(event.target.value);
        setIdEvent(event.target.options[event.target.selectedIndex].getAttribute('idevent'));
    }

    const changeTeamHandler = (event) => {
        setIdTeam(event.target.value);
    }

    /*
    // just for test
    setTimeout(function() {
        // set loginStep data
        dispatch({
            type: actions.SET_LOGIN_STEP,
            loginStep: loginSteps.SELECT_TEAM
        })

        // redirect to HOME route
        props.history.push(routes.HOME);
    }, 10000);
    */

    const submit = async (formData) => {
        console.log('formData', formData);
        setLoading(true);
        setTimeout(function() {
            setLoading(false);
        }, 5000);
        /*
        try {
            const requestBody = {
                username: formData.username,
                password: formData.password
            };

            const { data } = await axios.post('https://api.commandpost.com.au/auth/signin', requestBody);
            // const { data } = await axios.post('http://localhost:4000/auth/signin', requestBody); // dev env, need to setup env later
            setLoading(false);
            // set authUser data
            dispatch({
                type: actions.SET_AUTH_USER,
                authUser: data
            })
            // set loginStep data
            dispatch({
                type: actions.SET_LOGIN_STEP,
                loginStep: loginSteps.SELECT_INSTANCE
            })
            props.history.push(routes.SELECT_INSTANCE_TEAM);
        }
        catch (e) {
            if (e.response.data.error && e.response.data.type === 'validation') {
                setError(e.response.data.field, e.response.data.type, e.response.data.message);
                setLoading(false);
            } else {
                console.log("Unexpected error: Signin:submit");
            }
        }
        */
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
                      <Instances userId={props.authUser.id} idInstance={idInstance} changeInstanceHandler={changeInstanceHandler} register={register} formState={formState} errors={errors} />
                      {
                        idInstance && idInstance !== "new_instance" && idEvent ? (
                            <>
                                <Teams idInstance={idInstance} idEvent={idEvent} idTeam={idTeam} changeTeamHandler={changeTeamHandler} register={register} formState={formState} errors={errors} />
                                <Form.Group controlId="role">
                                    <Form.Label>Role <span className="tx-danger">*</span></Form.Label>
                                    <Form.Control defaultValue={props.authUser.role} name="role" type="text" placeholder="Enter your role" ref={register({ required: true })} className={errors.role ? "parsley-error" : (formState.isSubmitted && formState.touched.role && "parsley-success")} />
                                    {errors.role && errors.role.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                                </Form.Group>
                                <Form.Group controlId="company">
                                    <Form.Label>Agency / Company Name <span className="tx-danger">*</span></Form.Label>
                                    <Form.Control defaultValue={props.authUser.company} name="company" type="text" placeholder="Enter company name" ref={register({ required: true })} className={errors.company ? "parsley-error" : (formState.isSubmitted && formState.touched.company && "parsley-success")} />
                                    {errors.company && errors.company.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                                </Form.Group>
                                <Form.Group controlId="contact_number">
                                    <Form.Label>Contact number <span className="tx-danger">*</span></Form.Label>
                                    { /* eslint-disable-next-line */ }
                                    <Form.Control defaultValue={props.authUser.contact_number} name="contact_number" type="text" placeholder="Enter your contact number" ref={register({ required: true, pattern: /^\d+$/ })} className={errors.contact_number ? "parsley-error" : (formState.isSubmitted && formState.touched.contact_number && "parsley-success")} />
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
                    <div className="tx-13 mg-t-20 tx-center">Something is wrong? <a href=".">Sign Out</a></div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </>
    )
}

export default withRouter(SelectInstanceTeam);
