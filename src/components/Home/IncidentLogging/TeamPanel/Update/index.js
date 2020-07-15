import React from 'react';
import { Input } from 'antd';

import './style.scss';

const Update = () => {
  const { TextArea } = Input;
  return (
    <div className="update-panel">
      <label>Update</label>
      <TextArea rows={4} placeholder="Update" />
    </div>
  );
};
export default Update;
