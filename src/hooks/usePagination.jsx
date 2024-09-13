import { useState } from "react";

const usePagination = (defaultValue) => {
  const [page, setPage] = useState(defaultValue);

  const toNextPage = () => {
    setPage(page + 1);
  };

  const toPreviousPage = () => {
    setPage(page - 1);
  };

  return [page, toNextPage, toPreviousPage];
};

export default usePagination;
