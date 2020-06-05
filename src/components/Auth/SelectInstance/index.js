import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as actions from '../../../constants/action_types';
import * as routes from '../../../constants/routes';
import './SelectInstance.css';

function SelectInstance(props) {

    const { register, handleSubmit, formState, errors, setError } = useForm();
    const [loading, setLoading] = useState(false);
    const [instances, setInstances] = useState([]);
    const dispatch = useDispatch();

    const getInstancesHandler = async (userId) => {
        setLoading(true);

        try {
            const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/instances');
            // set instances data
            setInstances(data.instances);
            setLoading(false);
        }
        catch (e) {
            setLoading(false);
            console.log("Unexpected error: SelectInstance:getInstancesHandler", e);
        }
    }

    useEffect(() => {
        getInstancesHandler(props.userId);
    }, [props.userId]);
    /*
    // just for test
    setTimeout(function() {
        // set isInstanceSelected data
        dispatch({
            type: actions.SET_LOGIN_STEP,
            isInstanceSelected: true
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
        }, 1000);
        return;
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
            // set isInstanceSelected data
            dispatch({
                type: actions.SET_LOGIN_STEP,
                isInstanceSelected: true
            })
            props.history.push(routes.SELECT_INSTANCE);
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
                    <h3 className="tx-color-01 mg-b-5">Select Instance</h3>
                    <p className="tx-color-03 tx-16 mg-b-40">Select your Instance and team to continue.</p>
                    <Form onSubmit={handleSubmit(submit)}>
                      <Form.Group controlId="id_instance">
                        <Form.Label>Instance <span className="tx-danger">*</span></Form.Label>
                        <Form.Control name="id_instance" as="select" ref={register({ required: true })} className={errors.id_instance ? "parsley-error" : (formState.isSubmitted && formState.touched.id_instance && "parsley-success")}>
                            {instances.map((instance, index) => <option key={instance.id} value={instance.id}>{instance.event_title + ' - ' + instance.instance_title + ' (' + instance.instance_shortname + ')'}</option>)}
                        </Form.Control>
                        {errors.id_instance && errors.id_instance.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                      </Form.Group>
                      <Button variant="brand-02" block={true} type="submit">
                        {loading ? (
                            <>
                                <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
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

export default withRouter(SelectInstance);
