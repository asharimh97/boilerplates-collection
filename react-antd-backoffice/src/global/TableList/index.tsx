import { Table, TableProps } from "antd";
import useId from "hooks/useId";
import { renderPaginationTotal } from "utils/table";

interface TableListProps<T = any> extends TableProps<T> {
  total: number;
  limit: number;
  page: number;
  onChangePage: (page: number, limit: number) => void;
}

function TableList({
  columns,
  dataSource: list,
  total,
  page,
  limit,
  onChangePage,
}: TableListProps) {
  const randomId = useId();
  return (
    <Table
      columns={columns}
      dataSource={list}
      rowKey={(record) => record.id || randomId}
      pagination={{
        total,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50", "100"],
        pageSize: limit,
        current: page,

        showTotal: (total, range) => renderPaginationTotal(total, range),
        onChange: onChangePage,
      }}
    />
  );
}

export default TableList;
