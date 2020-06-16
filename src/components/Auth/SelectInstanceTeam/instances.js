import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Spinner } from 'react-bootstrap';


import {
    getInstances,
    setSessionExpiryModalState,
} from '../../../redux/action';

function Instances({
    userId,
    getInstances,
    setValue,
    idInstance,
    changeInstanceHandler,
    register,
    errors,
    formState,
    setSessionExpiryModalState,
}) {
    const [instances, setInstances] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getInstancesHandler = async (userId) => {
            setLoading(true);
            try {
                const { data } = getInstances();
                // set instances data
                setInstances(data.instances);
                // set default value
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return (
        <>
            <Form.Group controlId="id_instance">
                {loading && <Spinner size="sm" animation="grow" />}
                <Form.Label>Instance <span className="tx-danger">*</span></Form.Label>
                <Form.Control disabled={loading} onChange={changeInstanceHandler} name="id_instance" as="select" ref={register({ required: true })} className={(errors.id_instance ? "parsley-error" : (formState.isSubmitted && formState.touched.id_instance ? "parsley-success" : "")) + " custom-select " + (!idInstance ? " invalid" : "")}>
                    <option value="" disabled hidden className="invalid">Select Instance</option>
                    <option value="new_instance">Create a new Instance</option>
                    {instances.map((instance, index) => <option key={instance.id} value={instance.id} idevent={instance.id_event}>{instance.event_title + ' - ' + instance.instance_title + ' (' + instance.instance_shortname + ')'}</option>)}
                </Form.Control>
                {errors.id_instance && errors.id_instance.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
            </Form.Group>
        </>
    )
}
Instances.propTypes = {
    setSessionExpiryModalState: PropTypes.func.isRequired,
    getInstances: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    changeInstanceHandler: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    formState: PropTypes.object.isRequired,
    sessionData: PropTypes.object,
    authUser: PropTypes.object,
    idInstance: PropTypes.string,
    userId: PropTypes.string,
}

Instances.defaultProps = {
    sessionData: {},
    authUser: {},
    idInstance: "",
    userId: ""
}

const mapStateToProps = (store) => ({
    sessionData: store.sessionData.sessionData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getInstances,
    setSessionExpiryModalState,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Instances);