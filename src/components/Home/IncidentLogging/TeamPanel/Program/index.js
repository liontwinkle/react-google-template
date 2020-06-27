import React from 'react';
import CustomSelect from "../../../../common/CustomSelect";
import { ProgramStatus, ProgramStatusType } from "../../../../../constants/static";

import './style.scss';

const Program = () => {
    return (
        <div className='update-panel'>
            <label>Program / Activation Title</label>
            <CustomSelect optionData={ProgramStatus} placeholder="Program Status" />
            <CustomSelect optionData={ProgramStatusType} placeholder="Program Status Type" />
            <br />
            <label>Action Information</label>
        </div>
    )
};
export default Program;