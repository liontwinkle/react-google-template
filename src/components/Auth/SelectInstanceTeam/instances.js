import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

function Instances(props) {
    const [instances, setInstances] = useState([]);

    useEffect(() => {
        const getInstancesHandler = async (userId) => {
            try {
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/instances');
                // set instances data
                setInstances(data.instances);
            }
            catch (e) {
                // if unauthorized
                if (e.response.status === 401) {
                    // shold be shown logout information modal
                    return;
                }
                console.log("Unexpected error: Instances:getInstancesHandler", e);
            }
        }
        getInstancesHandler(props.userId);
    }, [props.userId]);

    return (
        <>
            <Form.Group controlId="id_instance" onChange={props.changeInstanceHandler}>
                <Form.Label>Instance <span className="tx-danger">*</span></Form.Label>
                <Form.Control deafaultvalue="" name="id_instance" as="select" ref={props.register({ required: true })} className={(props.errors.id_instance ? "parsley-error" : (props.formState.isSubmitted && props.formState.touched.id_instance ? "parsley-success" : "")) + " custom-select " + (!props.idInstance ? " invalid" : "")}>
                    <option value="" hidden className="invalid">Select Instance</option>
                    <option value="new_instance">Create a new Instance</option>
                    {instances.map((instance, index) => <option key={instance.id} value={instance.id} idevent={instance.id_event}>{instance.event_title + ' - ' + instance.instance_title + ' (' + instance.instance_shortname + ')'}</option>)}
                </Form.Control>
                {props.errors.id_instance && props.errors.id_instance.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
            </Form.Group>
        </>
    )
}

export default Instances;
