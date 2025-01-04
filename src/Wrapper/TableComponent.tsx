import React from "react";
import { DataContext } from "./DataWrapper";
import TableWidget from "../components/TableWidget";

export function TableComponent() {
  return (
    <DataContext.Consumer>
      {(value) => (
        <div
          style={{ width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <TableWidget
            formatListData={value.formatListData}
            responseStatus={value.responseStatus}
          />
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default TableComponent;
