import React from "react";

interface PagedProps {
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Paged: React.FC<PagedProps> = ({ onNextPage, onPreviousPage }) => {
  return (
    <div>
      <button onClick={onPreviousPage}>Previous</button>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
};

export default Paged;
