import { Layout, Menu } from 'antd';
import { UserOutlined, FormOutlined,TableOutlined,HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

export default function DefaultLayoutSidebar(){
   const navigate = useNavigate();

    return(
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}

        >
                <Menu.Item key={'0'} icon={<HomeOutlined />} onClick={()=>navigate('/')}>
          Home
        </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Teste">
            <Menu.Item key="1" icon={<TableOutlined/>} onClick={()=>navigate('/grid')} >grid</Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined/>} onClick={()=>navigate('/form')} >form</Menu.Item>
          </SubMenu>          
        </Menu>
      </Sider>

    );
}