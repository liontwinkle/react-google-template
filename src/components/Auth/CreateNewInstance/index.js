import React, { useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import * as actions from '../../../constants/action_types';
import Signout from '../Signout';
import '../Auth.css';

function CreateNewInstance() {
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submit = async (formData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // set loginStep data, will redirect to required route automatically
      dispatch({
          type: actions.SET_LOGIN_STEP,
          loginStep: false
      })
    }, 2000);
  }

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
                  <Button variant="brand-02" block={true} type="submit">
                    {loading ? (
                        <>
                            <Spinner size="sm" animation="grow" className="mr-2" />
                            <span>Processing</span>
                        </>
                    ) : 'Back'}
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

export default withRouter(CreateNewInstance);
