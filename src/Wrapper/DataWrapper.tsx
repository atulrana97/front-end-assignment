import React, { useEffect, useState } from "react";
import { fetchProjectAPICallData } from "../Services/APICallService";

export const DataContext = React.createContext({
  formatListData: [],
  responseStatus: "",
});

export function DataWrapper(props: any) {
  const [responseStatus, setResponseStatus] = useState("success");
  const [projectTableData, setProjectData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjectAPICallData();
        setProjectData(data);
        setResponseStatus("success");
        console.log("Please show me the data", data);
      } catch (e) {
        setResponseStatus("failure");
        console.log("Unable To Fetch Data");
      }
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{ formatListData: projectTableData, responseStatus }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataWrapper;
