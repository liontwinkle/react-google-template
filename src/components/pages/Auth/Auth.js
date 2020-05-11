import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
//import Spinner from '../../components/UI/Spinner/Spinner';
import WidePane from '../../layout/WidePane';
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity } from '../../../helpers/utility';

class Auth extends Component {
    state = {
        step1: {
            controls: {
                email: {
                    order: 1,
                    elementType: 'input',
                    type: 'email',
                    placeholder: 'yourname@yourmail.com',
                    label: 'Email address',
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value should be a valid email.'
                },
                password: {
                    order: 2,
                    elementType: 'password',
                    type: 'password',
                    placeholder: 'Enter your password',
                    label: 'Password',
                    value: '',
                    validation: {
                        required: true,
                        minLength: 6
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'Password must be longer than 6 characters.'
                }
            }
        },
        step2: {
            controls: {
                instance: {
                    order: 1,
                    elementType: 'select',
                    type: 'instance',
                    placeholder: 'Select Instance',
                    label: 'Instance',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value is required.'
                }
            }
        },
        isSignup: false,
        isSubmitted: false,
        isValid: false,
        isTouched: false,
        currentStep: 'step1'
    }

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (event, controlName) => {
        const currentStep = this.state.currentStep;
        const updatedControls = updateObject(this.state[currentStep].controls, {
            [controlName]: updateObject(this.state[currentStep].controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state[currentStep].controls[controlName].validation),
                touched: true
            })
        });

        //console.log(updatedControls);

        let formValid = true;
        for (let control in updatedControls) {
            if (!updatedControls[control].valid) formValid = false;
        }

        let formTouched = true;
        for (let control in updatedControls) {
            if (!updatedControls[control].touched) formTouched = false;
        }

        this.setState({
            [currentStep]: { controls: updatedControls },
            isValid: formValid,
            isTouched: formTouched
        });

    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ isSubmitted: true });
        if (this.state.isValid && this.state.currentStep === 'step1') {
            this.props.onAuth(this.state.step1.controls.email.value, this.state.step1.controls.password.value, this.state.isSignup);
        }
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }

    render() {
        let errorMessage = null;
        let errorCode = null;
        const currentStep = this.state.currentStep;

        if (this.props.error) {
            errorMessage = (
                <div className="parsley-errors-list filled mt-1">{this.props.error.message}</div>
            );
            errorCode = this.props.error.code;
        }

        const formElementsArray = [];
        for (let key in this.state[currentStep].controls) {
            formElementsArray.push({
                id: key,
                config: this.state[currentStep].controls[key]
            });
        }

        formElementsArray.sort((a, b) => Number(a.config.order) - Number(b.config.order));

        let form = formElementsArray.map(formElement => {
            let errorClass = null;
            if (!formElement.config.valid && formElement.config.touched && this.state.isSubmitted) {
                errorClass = 'parsley-error';
            } else if (formElement.config.valid) {
                errorClass = 'parsley-success';
            }
            return (
                <FormGroup
                    controlId={formElement.config.type}
                    key={formElement.id}>
                    <FormLabel>{formElement.config.label}</FormLabel>
                    <FormControl
                        type={formElement.config.elementType}
                        value={formElement.config.value}
                        placeholder={formElement.config.placeholder}
                        className={errorClass}
                        onChange={(event) => this.inputChangedHandler(event, formElement.id)} />
                    <div className="parsley-errors-list filled mt-1">{(!formElement.config.valid && formElement.config.touched && this.state.isSubmitted) ? formElement.config.validationErr : ''}</div>
                    {(formElement.id === 'email' && errorCode !== 406) ? errorMessage : null}
                    {(formElement.id === 'password' && errorCode === 406) ? errorMessage : null}
                </FormGroup>
            );
        }
        );

        let submitButton = (
            <Button
                type="submit"
                className="btn btn-brand-02 btn-block wd-100p"
                block
                disabled={!this.state.isTouched}>Continue</Button>
        );

        if (this.props.loading) {
            submitButton = (
                <Button
                    type="submit"
                    className="btn btn-brand-02 btn-block wd-100p"
                    block
                    disabled><span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>Processing</Button>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <WidePane animateClass={this.props.animateClass} layoutClass="main-group wide-group signin-group">
                <div className="d-flex align-items-stretch justify-content-center ht-100p pd-30 pos-relative">
                    <div className="sign-wrapper justify-content-start">
                        <div className="wd-100p" id="signin_form_wrapper">
                            <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                            <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
                            {authRedirect}
                            <form onSubmit={this.submitHandler}>
                                {form}
                                {submitButton}
                            </form>
                            {/* <Button
                                onClick={this.switchAuthModeHandler}
                                className="btn btn-brand-02 btn-block wd-100p mt-3"
                            >SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button> */}
                        </div>
                    </div>
                </div>
            </WidePane>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);