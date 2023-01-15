import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { useAppDispatch } from "src/Redux/HooksTypes";

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage?: number
  onPageChanged?: any
  portionSize?: number
}

const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, pageSize,
  currentPage = 1,
  onPageChanged,
  portionSize = 10}) => {
  let dispatch = useAppDispatch();

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <Pagination className="m-1">
      {portionNumber > 1 && (
        <Pagination.Prev
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        />
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              onClick={() => {
                dispatch(onPageChanged(p));
              }}
            >
              <Pagination.Item>{p}</Pagination.Item>
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <Pagination.Next
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        />
      )}
    </Pagination>
  );
};

export default Paginator;

// |
// totalItemsCount,
// pageSize,
// currentPage,
// onPageChanged,
// portionSize = 10,