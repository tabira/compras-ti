import { Layout} from 'antd';

import Breadcrumb from './Breadcrumb';
import DefaultLayoutHeader from './Header';
import DefaultLayoutSidebar from './SideBar';

const { Content} = Layout;

interface DefaultLayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout( props:DefaultLayoutProps){
    return  <Layout>
    <DefaultLayoutHeader/>
    <Layout>
      <DefaultLayoutSidebar/>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb/>

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
           {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>;

}