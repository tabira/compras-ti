import { Layout, Menu } from 'antd';
import { UserOutlined, FormOutlined,TableOutlined,HomeOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Sider } = Layout;

export default function DefaultLayoutSidebar(){
    return(
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}

        >
                <Menu.Item key={'0'} icon={<HomeOutlined />}>
          Home
        </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Teste">
            <Menu.Item key="1" icon={<TableOutlined/>}>grid</Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined/>}>form</Menu.Item>
          </SubMenu>          
        </Menu>
      </Sider>

    );
}