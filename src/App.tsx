import React from "react";
import "./App.css";
import DataWrapper from "./Wrapper/DataWrapper";
import TableComponent from "./Wrapper/TableComponent";

function App() {
  return (
    <div className="App">
      <DataWrapper>
        <TableComponent />
      </DataWrapper>
    </div>
  );
}

export default App;
