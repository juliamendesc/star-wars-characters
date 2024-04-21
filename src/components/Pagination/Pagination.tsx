import React, { useContext } from "react";
import ChevronLeft from "src/assets/icons/chevron-left";
import ChevronRight from "src/assets/icons/chevron-right";
import { CharactersContext } from "src/context/CharactersContext";

export default function Pagination() {
  const { response, fetchPage, currentPage, setCurrentPage } =
    useContext(CharactersContext);
  const { count, previous, next } = response;
  const recordsPerPage = 10;
  const totalPages = Math.ceil(count / recordsPerPage);

  const handlePageClick = (pageNumber: number) => {
    fetchPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  // Generate page numbers
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const startIndex = (currentPage - 1) * recordsPerPage + 1;
  const endIndex = Math.min(startIndex + recordsPerPage - 1, count);

  // Determine which pages to display
  const pagesToShow = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
  } else {
    // Always include the first page
    pagesToShow.push(1);

    // Handle ellipsis and pages around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(currentPage + 1, totalPages - 1);

    if (startPage > 2) {
      pagesToShow.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }

    if (endPage < totalPages - 1) {
      pagesToShow.push("...");
    }

    // Always include the last page
    pagesToShow.push(totalPages);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => previous && handlePageClick(currentPage - 1)}
          disabled={!previous}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ChevronLeft />
          <span>Previous</span>
        </button>
        <button
          onClick={() => next && handlePageClick(currentPage + 1)}
          disabled={!next}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <ChevronRight />
          <span>Next</span>
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        {count && (
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium"> {startIndex} </span>
              to
              <span className="font-medium"> {endIndex} </span>
              of
              <span className="font-medium"> {count} </span>
              results
            </p>
          </div>
        )}
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ChevronLeft />
              <span className="sr-only">Previous</span>
            </button>
            {pagesToShow.map((page) => {
              if (page === "...") {
                return (
                  <span
                    key={crypto.randomUUID()}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
                  >
                    {page}
                  </span>
                );
              } else {
                return (
                  <button
                    key={crypto.randomUUID()}
                    onClick={() => handlePageClick(page as number)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === page
                        ? "bg-indigo-600 text-white"
                        : "text-gray-900 hover:bg-gray-50"
                    } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                  >
                    {page}
                  </button>
                );
              }
            })}
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ChevronRight />
              <span className="sr-only">Next</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
