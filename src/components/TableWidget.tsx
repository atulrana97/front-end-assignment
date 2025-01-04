import React, { useEffect, useState } from "react";
import "./TableWidget.css";
import PaginationComponent from "./PaginationWidget/PaginationComponent";

export function TableWidget(data: any) {
  const [paginationIndex, setPagination] = useState(1);
  const [finalResult, setFinalResult] = useState([]);
  const [paginationRangeList, setPaginationRangeList] = useState([]);
  const [startIndex, setStartIndex] = useState(1);

  const getPages = () => {
    return Math.floor((data?.formatListData?.length ?? 0) / 5);
  };
  const calculateEndIndex = (data: any) => {
    const pages = getPages();
    console.log("pages", pages);
    if (pages > 5) {
      return 5;
    } else {
      return pages;
    }
  };
  const [endIndex, setEndIndex] = useState(calculateEndIndex(data));

  console.log("Please show me ", data?.formatListData);
  const singlePageData = (formatList: any, paginationIndex: number) => {
    const startIndex = (paginationIndex - 1) * 5;
    const endIndex = startIndex + 5;
    let i = startIndex;
    const result = [];
    while (i < endIndex && i < formatList.length) {
      result.push(formatList[i]);
      i++;
    }
    return result;
  };

  const renderPagination = (startIndex: number, endIndex: number) => {
    const list = [];
    console.log("paginationList", startIndex, endIndex);
    for (let i = startIndex; i <= endIndex; i++) {
      list.push(i);
    }
    return list;
  };

  useEffect(() => {
    setStartIndex(1);
    setEndIndex(calculateEndIndex(data));
    const list: any = renderPagination(1, calculateEndIndex(data));
    setPaginationRangeList(list);
    // eslint-disable-next-line
  }, [data]);
  useEffect(() => {
    const checkData: any = singlePageData(
      data?.formatListData ?? [],
      paginationIndex
    );
    setFinalResult(checkData);
  }, [data?.formatListData, paginationIndex]);

  return (
    <div style={{ width: "100%", margin: "1rem" }}>
      <div className="table-heading-wrapper">
        <p>Saas Project</p>
      </div>
      <table className="border-table">
        <thead key={`Heading##`}>
          <tr className="td-style-class header-specifics">
            <th>S No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        {finalResult.map((item: any, index: number) => {
          const className =
            index % 2 === 0
              ? "td-style-class"
              : "td-style-class simultaneous-rows-color";
          return (
            <thead key={`${index}##`}>
              <tr className={className}>
                <td>{item?.["s.no"]}</td>
                <td>{item?.["percentage.funded"]}</td>
                <td>{item?.["amt.pledged"]}</td>
              </tr>
            </thead>
          );
        })}
      </table>
      <PaginationComponent
        endIndex={endIndex}
        data={data}
        setPaginationRangeList={setPaginationRangeList}
        startIndex={startIndex}
        renderPagination={renderPagination}
        setStartIndex={setStartIndex}
        setEndIndex={setEndIndex}
        getPages={getPages}
        paginationRangeList={paginationRangeList}
        paginationIndex={paginationIndex}
        setPagination={setPagination}
      />
    </div>
  );
}

export default TableWidget;
