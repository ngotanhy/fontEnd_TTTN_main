import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Spin } from 'antd';


const Loading: React.FC = () => (
  <div className="example">
    <Spin />
  </div>
);

export default Loading;