import { Layout, Menu, MenuProps } from "antd";
import { NavLink, Outlet } from "react-router";


const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label:<NavLink to={'/admin/dashboard'}>Dashboard</NavLink>
  },
  {
    key: "User Management",
    label: "User Management",
    children:[
        {
            key: "create admin",
            label: <NavLink to={'/admin/create-admin'}>create admin</NavLink>,
        },
        {
            key: "create faculty",
            label:  <NavLink to={'/admin/create-faculty'}>create faculty</NavLink>,
        },
        {
            key: "create student",
            label:  <NavLink to={'/admin/create-student'}>create student</NavLink>,
        },
    ]
  },
  {
    key: "Course Management",
    label: "Course Management",
    children:[
        {
            key: "Offered Course",
            label: <NavLink to={'/admin/offered-course'}>create admin</NavLink>,
        },
      
    ]
  },
  
];
const mainLayout = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{ color: "white",  height: "4rem", display:"flex",justifyContent:"center",alignItems:"center" }}>
            <h2>PH University</h2>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default mainLayout;
