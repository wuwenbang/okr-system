import './index.less';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Topbar from '@/components/Topbar/index';
export default function IndexPage() {
  return (
    <Layout>
      <Topbar />
      <Layout>
        <Sider className="sider">Sider</Sider>
        <Content className="content">Content</Content>
      </Layout>
      <Footer className="footer">Footer</Footer>
    </Layout>
  );
}
