import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage >= 1;
  const isNextPageAvailable =
    (totalItems % 3 === 0 && totalItems - (currentPage + 1) * itemsPerPage < itemsPerPage) ||
    (totalItems % 3 !== 0 && totalItems - (currentPage + 1) * itemsPerPage < 0);
  return (
    <div className="pagination">
      {isPrevPageAvailable ? (
        <button className="btn" onClick={goPrev}>
          ←
        </button>
      ) : (
        <button className="btn disabled" disabled />
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
