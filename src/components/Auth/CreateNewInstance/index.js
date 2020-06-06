import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Signout from '../Signout';
import '../Auth.css';

function CreateNewInstance() {
	return (
    <>
      <div className="content content-fixed content-auth">
        <Container>
          <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
            <div className="sign-wrapper">
              <div className="wd-100p">
                <h3 className="tx-color-01 mg-b-5">Create new Instance</h3>
                <p className="tx-color-03 tx-16 mg-b-40">Create new Instance wizard can be here.</p>
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
