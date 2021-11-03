import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components

function HelpMeChoosePagination(value) {
  const { step } = value
  return (
    <>
      <nav aria-label="...">
        <Pagination>
          <PaginationItem className={step === 1 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" style={{ 'border': '5'}} href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={step === 2 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" href="#pablo" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={step === 3 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={step === 4 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" href="#pablo" onClick={e => e.preventDefault()}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={step === 5 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" href="#pablo" onClick={e => e.preventDefault()}>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={step === 6 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" href="#pablo" onClick={e => e.preventDefault()}>
              6
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={step === 7 ? "active" : ""}>
            <PaginationLink className="HelpMeChoosePagination" href="#pablo" onClick={e => e.preventDefault()}>
              7
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default HelpMeChoosePagination