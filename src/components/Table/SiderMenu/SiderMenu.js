import React from 'react';
import { Menu } from 'antd';
import { SolutionOutlined, OrderedListOutlined, DollarOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const SiderMenu = () => {
  return (
    <Menu
      // onClick={this.handleClick}
      // style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="1" icon={<DollarOutlined />}>
        Balance
      </Menu.Item>
      <SubMenu key="sub2" icon={<OrderedListOutlined />} title="Orders">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
      </SubMenu>
      <Menu.Item key="2" icon={<SolutionOutlined />}>
        My info
      </Menu.Item>
    </Menu>
  );
}

export default SiderMenu
