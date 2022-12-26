import { Text } from "components/Base";

export const renderPaginationTotal = (total: number, range: any) => (
  <Text>
    Showing <b>{range[0]}</b> to <b>{range[1]}</b> of <b>{total}</b> results
  </Text>
);
