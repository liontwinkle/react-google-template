import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import WidePane from '../../layout/WidePane';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <WidePane animateClass={props.animateClass}>
            <div className="d-flex align-items-stretch justify-content-center ht-100p pd-30 pos-relative">
                <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
                    <div className="wd-100p" id="signin_form_wrapper">
                        <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                        <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
                        <form method="post" className="signin-form" id="signin_form" onSubmit={handleSubmit} data-parsley-validate>
                            <FormGroup controlId="email">
                                <FormLabel>Email address</FormLabel>
                                <FormControl
                                    autoFocus
                                    required
                                    type="email"
                                    name="username"
                                    placeholder="yourname@yourmail.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <div className="d-flex justify-content-between mg-b-5">
                                    <FormLabel className="mg-b-0-f">Password</FormLabel>
                                    <a href="/" className="tx-13">Forgot password?</a>
                                </div>
                                <FormControl
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                />
                            </FormGroup>
                            <Button
                                block
                                disabled={!validateForm()}
                                type="submit"
                                className="btn btn-brand-02 btn-block wd-100p"
                            >Continue
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </WidePane>
    );
}