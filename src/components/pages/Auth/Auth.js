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
        controls: {
            email: {
                elementType: 'input',
                type: 'email',
                placeholder: 'yourname@yourmail.com',
                label: 'Email address',
                value: ''
            },
            password: {
                elementType: 'input',
                type: 'password',
                placeholder: 'Enter your password',
                label: 'Password',
                value: ''
            }
        },
        isSignup: true
    }

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({ controls: updatedControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };
        });
    }

    validateForm = () => {
        return this.state.controls.email.value.length > 0 && this.state.controls.password.value.length > 0;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <FormGroup controlId={formElement.config.type}>
                <FormLabel>{formElement.config.label}</FormLabel>
                <FormControl
                    key={formElement.id}
                    type={formElement.config.type}
                    value={formElement.config.value}
                    placeholder={formElement.config.placeholder}
                    onChange={(event) => this.inputChangedHandler(event, formElement.id)} />
            </FormGroup>
        ));

        if (this.props.loading) {
            //form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <WidePane animateClass={this.props.animateClass}>
                <div className="d-flex align-items-stretch justify-content-center ht-100p pd-30 pos-relative">
                    <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60 justify-content-start">
                        <div className="wd-100p" id="signin_form_wrapper">
                            <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                            <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
                            {authRedirect}
                            {errorMessage}
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <Button
                                    type="submit"
                                    className="btn btn-brand-02 btn-block wd-100p"
                                    block
                                    disabled={!this.validateForm()}>Continue</Button>
                            </form>
                            <Button
                                onClick={this.switchAuthModeHandler}
                                className="btn btn-brand-02 btn-block wd-100p mt-3"
                            >SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
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