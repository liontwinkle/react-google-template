import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  Container, Form, Button, Spinner,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Signout from '../Signout';
import { setLoginStep } from '../../../redux/action/session';
import * as loginSteps from '../../../constants/login_steps';

import '../Auth.scss';

function CompleteTraining({ setLoginStep }) {
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // set loginStep data, will redirect to required route automatically
      setLoginStep(loginSteps.FINISHED);
    }, 2000);
  };

  return (
    <>
      <div className="content content-fixed content-auth">
        <Container>
          <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
            <div className="sign-wrapper">
              <div className="wd-100p">
                <h3 className="tx-color-01 mg-b-5">Complete training</h3>
                <p className="tx-color-03 tx-16 mg-b-40">Complete your training to continue.</p>
                <Form onSubmit={handleSubmit(submit)}>
                  <Button variant="brand-02" block type="submit">
                    {loading ? (
                      <>
                        <Spinner size="sm" animation="grow" className="mr-2" />
                        <span>Processing</span>
                      </>
                    ) : 'Continue'}
                  </Button>
                </Form>
                <div className="tx-13 mg-t-20 tx-center">
                  Something is wrong?
                  <Signout />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

CompleteTraining.propTypes = {
  setLoginStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setLoginStep,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(CompleteTraining));
