import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Container, Form, Button, Spinner,
} from 'react-bootstrap';

import Signout from '../Signout';
import { setLoginStep } from '../../../redux/action/session';

import '../Auth.scss';

function CreateNewInstance({
  setLoginStep,
}) {
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // set loginStep data, will redirect to required route automatically
      setLoginStep(null);
    }, 2000);
  };

  return (
    <>
      <div className="content content-fixed content-auth">
        <Container>
          <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
            <div className="sign-wrapper">
              <div className="wd-100p">
                <h3 className="tx-color-01 mg-b-5">Create new Instance</h3>
                <p className="tx-color-03 tx-16 mg-b-40">Create new Instance wizard can be here.</p>
                <Form onSubmit={handleSubmit(submit)}>
                  <Button variant="brand-02" block type="submit">
                    {loading ? (
                      <>
                        <Spinner size="sm" animation="grow" className="mr-2" />
                        <span>Processing</span>
                      </>
                    ) : 'Back'}
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

CreateNewInstance.propTypes = {
  setLoginStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setLoginStep,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(CreateNewInstance));
