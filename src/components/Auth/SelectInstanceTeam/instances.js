import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Spinner } from 'react-bootstrap';

import { setSessionExpiryModalState } from '../../../redux/action/themeConfigs';
import { getInstances } from '../../../redux/action/session';

function Instances({
    userId,
    instances,
    setValue,
    idInstance,
    changeInstanceHandler,
    register,
    errors,
    formState,
    setSessionExpiryModalState,
    getInstances,
}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getInstancesHandler = async (userId) => {
            setLoading(true);
            try {
                setValue("id_instance", idInstance || "");
                setLoading(false);
            }
            catch (e) {
                // if unauthorized
                if (e.response.status === 401) {
                    // open session expiry modal
                    setSessionExpiryModalState(true);
                    setLoading(false);
                    return;
                }
                console.log("Unexpected error: Instances:getInstancesHandler", e);
            }
        }
        getInstancesHandler(userId);
        if(instances.length === 0) {
            getInstances();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, instances])
    
    return (
        <>
            <Form.Group controlId="id_instance">
                {loading && <Spinner size="sm" animation="grow" />}
                <Form.Label>Instance <span className="tx-danger">*</span></Form.Label>
                <Form.Control disabled={loading} onChange={changeInstanceHandler} name="id_instance" as="select" ref={register({ required: true })} className={(errors.id_instance ? "parsley-error" : (formState.isSubmitted && formState.touched.id_instance ? "parsley-success" : "")) + " custom-select " + (!idInstance ? " invalid" : "")}>
                    <option value="" disabled hidden className="invalid">Select Instance</option>
                    <option value="new_instance">Create a new Instance</option>
                    {instances.map((instance) => <option key={instance.id} value={instance.id} idevent={instance.id_event}>{instance.event_title + ' - ' + instance.instance_title + ' (' + instance.instance_shortname + ')'}</option>)}
                </Form.Control>
                {errors.id_instance && errors.id_instance.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
            </Form.Group>
        </>
    )
}
Instances.propTypes = {
    userId: PropTypes.number,
    idInstance: PropTypes.string,
    instances: PropTypes.array,
    authUser: PropTypes.object,
    sessionData: PropTypes.object,
    errors: PropTypes.object.isRequired,
    formState: PropTypes.object.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    getInstances: PropTypes.func.isRequired,
    changeInstanceHandler: PropTypes.func.isRequired,
};

Instances.defaultProps = {
    sessionData: {},
    authUser: null,
    idInstance: null,
    instances: [],
    userId: null,
};

const mapStateToProps = (store) => ({
    sessionData: store.sessionData.sessionData,
    instances: store.sessionData.instances,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setSessionExpiryModalState,
    getInstances
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Instances);