import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems, itemsPerPage }) => {
  console.log(currentPage);
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable =
    (totalItems % itemsPerPage === 0 &&
      totalItems - (currentPage + 1) * itemsPerPage < itemsPerPage) ||
    (totalItems % itemsPerPage !== 0 && totalItems - (currentPage + 1) * itemsPerPage < 0);
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
