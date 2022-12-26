import type * as Stitches from "@stitches/react";

const gap = (value: Stitches.PropertyValue<"gap">) => ({
  gridGap: value,
});

const columns = (value: Stitches.PropertyValue<"gridTemplateColumns">) => ({
  gridTemplateColumns: value,
});

const rows = (value: Stitches.PropertyValue<"gridTemplateRows">) => ({
  gridTemplateRows: value,
});

const grid = {
  gap,
  columns,
  rows,
};

export default grid;
