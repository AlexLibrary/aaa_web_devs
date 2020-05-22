import React, { useState, useEffect } from "react";
import { Table } from "antd";
import './changeAntdStyle.css'
import styles from './AntTable.module.scss'
import { connect } from "react-redux";
import { requestOrders } from '../../../redux/reducer_orders'
import Paginator from './Paginator'
import { Link } from "react-router-dom";

const columns = [
  { title: "#", dataIndex: "id", width: '75px', align: 'center', },
  { title: "Date & Time", dataIndex: "date", width: '178px' },
  {
    title: "Info", dataIndex: "info", width: '660px', render: (obj) => {
      if (obj.type === 'BuyItem') return <>
        Buy in <a href={obj.game.ref} target='blank'>{obj.game.name}</a> the unique item, <a href={obj.item.ref} target='blank'>{obj.item.name}</a>
      </>
      if (obj.type === 'BuyUser') return <>
        Buy in <a href={obj.game.ref} target='blank'>{obj.game.name}</a> the unique user, <a href={obj.item.ref} target='blank'>{obj.item.name}</a>
      </>
      if (obj.type === 'BuyGameArea') return <>
        Buy in <a href={obj.game.ref} target='blank'>{obj.game.name}</a> the unique game area, <a href={obj.item.ref} target='blank'>{obj.item.name}</a>
      </>
      if (obj.type === 'Deposit') return <div className={styles.deposit}>
        Make up deposit <Link to={obj.deposit.ref} target='blank'>{obj.deposit.count}</Link> to your account.
      </div>
    }
  },
  { title: "Type", dataIndex: "type", width: '89px' },
  { title: "Cash", dataIndex: "cash", width: '168px', align: 'right', },
  {
    title: "Status", dataIndex: "status", width: '70px', align: 'center',
    render: (text) => {
      if (text === 'Done') return text
      if (text === 'Cancel') return <span className={styles.cancel}>{text}</span>
      if (text === 'Error') return <span className={styles.error}>{text}</span>
    }
  }
];

const MyTable = (props) => {
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!props.initialized) props.requestOrders(page, pageSize)
  }, [props.initialized])

  return (
    <Table
      pagination={false}
      loading={props.isLoading}
      columns={columns}
      rowKey={record => record.id}
      dataSource={props.orders}
      scroll={{ y: 636 }}
      footer={() => <Paginator
        total={props.totalCount}
        setPage={setPage}
        page={page}
        pageSize={pageSize}
        setPageSize={setPageSize}
        requestOrders={props.requestOrders}
      />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
  totalCount: state.orders.totalCount,
  isLoading: state.orders.isLoading,
  initialized: state.orders.initialized
})

export default connect(mapStateToProps, { requestOrders })(MyTable)
