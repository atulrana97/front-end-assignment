import React from "react";

function PaginationComponent(props: any) {
  const {
    endIndex,
    data,
    setPaginationRangeList,
    startIndex,
    renderPagination,
    setStartIndex,
    setEndIndex,
    getPages,
    paginationRangeList,
    paginationIndex,
    setPagination,
  } = props;

  const singlePaginationElement = (key: number) => {
    const className =
      paginationIndex === key
        ? "pagination-selector-button current-selected-pagination"
        : "pagination-selector-button";
    return (
      <div className={`${className}`} onClick={() => setPagination(key)}>
        {key}
      </div>
    );
  };
  const onNextPaginationButtonClick = () => {
    let endIndexSecondary = endIndex;
    const pages = Math.floor((data?.formatListData?.length ?? 0) / 5);
    if (endIndex + 5 < pages) {
      endIndexSecondary = endIndex + 5;
    } else {
      endIndexSecondary = pages;
    }
    const list: any = renderPagination(endIndex + 1, endIndexSecondary);
    console.log("What is it", list, startIndex, endIndex);
    setPaginationRangeList(list);
    setStartIndex(endIndex + 1);

    setEndIndex((current: any) => {
      const pages = getPages();
      if (current + 5 < pages) {
        return current + 5;
      } else {
        return pages;
      }
    });
  };
  const onPreviousPaginationButtonClick = () => {
    const list: any = renderPagination(startIndex - 5, startIndex - 1);
    console.log("What is it", list, startIndex, endIndex);
    setPaginationRangeList(list);
    setStartIndex(startIndex - 5);

    setEndIndex(startIndex - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
      }}
    >
      <div style={{ display: "flex", color: "grey" }}>
        <b>Current Page : </b>
        <p style={{ color: "black", margin: 0 }}>{paginationIndex}</p>/
        {getPages()}
      </div>
      <div style={{ display: "flex" }}>
        {startIndex !== 1 && (
          <div
            className="pagination-navigator-buttons"
            onClick={onPreviousPaginationButtonClick}
          >{`<<`}</div>
        )}
        <div style={{ display: "flex" }}>
          {paginationRangeList.map((item: any) => {
            return singlePaginationElement(item);
          })}
        </div>
        {getPages() !== endIndex && (
          <div
            className="pagination-navigator-buttons"
            onClick={onNextPaginationButtonClick}
          >{`>>`}</div>
        )}
      </div>
    </div>
  );
}

export default PaginationComponent;
