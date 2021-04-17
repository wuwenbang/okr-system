import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.less';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <div className="topbar-title">OKR</div>
      </div>
      <div className="right">
        <Avatar>文邦</Avatar>
      </div>
    </div>
  );
};
export default Topbar;
