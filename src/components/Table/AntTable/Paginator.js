import React from "react";
import { ReactComponent as arrowSVG } from './arrow.svg'
import { Pagination, Select } from "antd";
import styles from './AntTable.module.scss'
const { Option } = Select;

const Paginator = ({ total, setPage, page, pageSize, setPageSize, requestOrders }) => {

  const defaultValue = 25;
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <span className={styles.select}>Show on page: </span>
      <Select
        suffixIcon={arrowSVG.render()}
        defaultValue={defaultValue}
        loading={false}
        onChange={(value) => {
          setPageSize(value);
          setPage(1)
          requestOrders(1, value);
          /* Scroll table tbody to Top */
          const table = document.querySelector('.ant-table-body table')
          table && table.scrollIntoView();
          document.querySelector('.ant-layout-header').scrollIntoView();
        }}
      >
        <Option value={defaultValue}>{defaultValue}</Option>
        <Option value={defaultValue * 2}>{defaultValue * 2}</Option>
        <Option value={defaultValue * 4}>{defaultValue * 4}</Option>
      </Select>

      <Pagination
        total={total}
        current={page}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={(page, pageSize) => {
          setPage(page)
          requestOrders(page, pageSize);
          /* Scroll table tbody to Top */
          const table = document.querySelector('.ant-table-body table')
          table && table.scrollIntoView();
          document.querySelector('.ant-layout-header').scrollIntoView();
        }}
      />
    </div>
  )
}

export default Paginator
