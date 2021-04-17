import { Button } from 'antd';
// import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Layout } from 'antd';
import { FC } from 'react';

const Layouts: FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};
export default Layouts;
