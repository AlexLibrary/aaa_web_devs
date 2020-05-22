import React from 'react'
import AntTable from './AntTable/AntTable'
import { Layout } from "antd";
import SiderMenu from './SiderMenu/SiderMenu';
import HeaderTable from './Header/HeaderTable';
const { Header, Sider, Content } = Layout;

const TableComponent = () => {
  return (
    <Layout>
      <Sider style={{ background: '#006D75' }}>
        <SiderMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#00292f', color: '#fff', height: '86px' }}>
          <HeaderTable />
        </Header>
        <Content style={{ background: '#00292f', color: '#fff' }}>
          <AntTable />
        </Content>
      </Layout>
    </Layout>
  )
}

export default TableComponent
