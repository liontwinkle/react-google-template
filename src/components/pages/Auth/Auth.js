import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';
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
                    name: 'user_email',
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
                    elementType: 'input',
                    type: 'password',
                    name: 'user_password',
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
            },
            title: 'Sign In',
            description: 'Welcome back! Please signin to continue.'
        },
        step2: {
            controls: {
                instance: {
                    order: 1,
                    elementType: 'select',
                    type: 'select',
                    name: 'id_instance',
                    placeholder: 'Select Instance',
                    label: 'Instance',
                    value: 0,
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value is required.',
                    selectedOption: 0
                },
                team: {
                    order: 2,
                    elementType: 'select',
                    type: 'select',
                    name: 'id_team',
                    placeholder: 'Select Team',
                    label: 'Team',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value is required.'
                },
                role: {
                    order: 3,
                    elementType: 'input',
                    type: 'text',
                    name: 'user_role',
                    placeholder: 'Enter your role',
                    label: 'Role',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value is required.'
                },
                company: {
                    order: 4,
                    elementType: 'input',
                    type: 'text',
                    name: 'user_company',
                    placeholder: 'Enter company name',
                    label: 'Agency / Company Name',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value is required.'
                },
                number: {
                    order: 5,
                    elementType: 'input',
                    type: 'text',
                    name: 'user_contact_number',
                    placeholder: 'Enter your contact number',
                    label: 'Contact number',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    validationErr: 'This value is required.'
                }
            },
            title: 'Select Instance',
            description: 'Select your Instance and team to continue.'
        },
        step3: {
            title: 'Complete training',
            description: 'Complete your training to continue.'
        },
        isSignup: false,
        isSubmitted: false,
        isValid: false,
        isTouched: false
    }

    componentDidMount() {
        if (this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (event, controlName) => {
        let selectedOption = null;
        if(event.target.tagName === 'SELECT') {
            selectedOption = event.target.options[event.target.selectedIndex].getAttribute('selectedoption');
        }
        const currentStep = this.props.currentStep;
        const updatedControls = updateObject(this.state[currentStep].controls, {
            [controlName]: updateObject(this.state[currentStep].controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state[currentStep].controls[controlName].validation),
                touched: true,
                selectedOption: selectedOption
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

        const updatedStep = { ...this.state[currentStep] }
        updatedStep.controls = updatedControls;

        this.setState({
            [currentStep]: updatedStep,
            isValid: formValid,
            isTouched: formTouched
        });

    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({ isSubmitted: true });
        if (this.state.isValid && this.props.currentStep === 'step1') {
            this.props.onAuth(this.state.step1.controls.email.value, this.state.step1.controls.password.value, this.state.isSignup, (userId) => {
                // Callback after authorization
                this.getInstancesHandler(userId);
            });
        } else if (this.state.isValid && this.props.currentStep === 'step2') {
            // Submit selected Instance
        }
    }

    getInstancesHandler = (userId) => {
        console.log('userId: ' + userId);
        const userData = {
            userId: userId
        };
        let url = 'http://74.208.102.130:4000/api/getinstances';
        axios.post(url, userData)
            .then(response => {
                console.log(response);

                const updatedInstance = { ...this.state.step2 }
                updatedInstance.controls.instance.instance_list = response.data.instance_list;

                this.setState({
                    step2: updatedInstance
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }

    render() {
        let errorMessage = null;
        let errorCode = null;
        const currentStep = this.props.currentStep;

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
            let selectOptions = null;
            if (formElement.id === 'instance' && formElement.config.instance_list) {
                selectOptions = formElement.config.instance_list.map((select, index) =>
                    <option key={select.id} value={select.id} selectedoption={index}>{select.event_title + ' - ' + select.instance_title + ' (' + select.instance_shortname + ')'}</option>
                  );
            }
            const instanceListPointer = this.state.step2.controls.instance.instance_list;
            const selectedOption = this.state.step2.controls.instance.selectedOption;
            if (formElement.id === 'team' && instanceListPointer) {
                selectOptions = instanceListPointer[selectedOption].team_list.map(select =>
                    <option key={select.id} value={select.id}>{select.team_title}</option>
                  );
            }
            return (
                <FormGroup
                    key={formElement.id}>
                    <FormLabel>{formElement.config.label}</FormLabel>
                    <FormControl
                        type={formElement.config.type}
                        as={formElement.config.elementType}
                        name={formElement.config.name}
                        value={formElement.config.value}
                        placeholder={formElement.config.placeholder}
                        className={errorClass}
                        onChange={(event) => this.inputChangedHandler(event, formElement.id)}>
                    {selectOptions}
                    </FormControl>
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
        if (this.props.isAuthenticated && this.props.currentStep === 'finished') {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        let signOutLink = null;
        if (this.props.currentStep !== 'step1') {
            signOutLink = (
                <div className="tx-13 mg-t-20 tx-center">
                    Something is wrong? <NavLink exact to="/signout">Sign Out</NavLink>
                </div>
            );
        }

        return (
            <WidePane animateClass={this.props.animateClass} layoutClass="main-group wide-group signin-group">
                <div className="d-flex align-items-stretch justify-content-center ht-100p pd-30 pos-relative">
                    <div className="sign-wrapper justify-content-start">
                        <div className="wd-100p" id="signin_form_wrapper">
                            <h3 className="tx-color-01 mg-b-5">{this.state[currentStep].title}</h3>
                            <p className="tx-color-03 tx-16 mg-b-40">{this.state[currentStep].description}</p>
                            {authRedirect}
                            <form onSubmit={this.submitHandler}>
                                {form}
                                {submitButton}
                            </form>
                            {signOutLink}
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
        authRedirectPath: state.auth.authRedirectPath,
        currentStep: state.auth.currentStep
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup, callback) => dispatch(actions.auth(email, password, isSignup, callback)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);