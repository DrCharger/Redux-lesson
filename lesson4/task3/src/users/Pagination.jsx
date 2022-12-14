import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage >= totalItems;
  return (
    <div className="pagination">
      {isPrevPageAvailable ? (
        <button className="btn disabled" disabled />
      ) : (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      )}
      <span className="pagination__page">{currentPage + 1}</span>
      {isNextPageAvailable ? (
        <button className="btn disabled" disabled></button>
      ) : (
        <button className="btn" onClick={goNext}>
          →
        </button>
      )}
    </div>
  );
};

export default Pagination;
