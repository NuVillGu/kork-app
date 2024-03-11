import React from "react";
import classNames from "classnames";
import CardButton from "../CardButton";
import Select from "react-select";
import { Form } from "@/node_modules/react-bootstrap/esm/index";


const PaginationItem = ({page, currentPage, onPageChange, isDisabled}) => {

    const liClasses = classNames({
        "page-item": true,
        active: page == currentPage,
        disabled: isDisabled,
    });

    return (
            <li className={liClasses} onClick={() => onPageChange(page)}>
                <span className="page-link">{page}</span>
            </li>
    );
}

const PaginationItemResponsive = ({page, currentPage, onPageChange, isDisabled }) => {

    const liClasses = classNames({
        active: page == currentPage,
        disabled: isDisabled,
    });

    return (
            <CardButton handleEvent={() => onPageChange(page)} name={page} className={liClasses}/>
    );
}

const range = (start, end) => {
    return [...Array(end - start).keys()].map( (element) => element + start );
}


const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
    
    const ceiling = Math.ceil(pagesCutCount/2);
    const floor = Math.floor(pagesCutCount/2);

    if (pagesCount < pagesCutCount) {
        return { start: 1, end: pagesCount + 1};
    } else if (currentPage >= 1 && currentPage <= ceiling) {
        return { start: 1, end: pagesCutCount + 1};
    } else if (currentPage + floor >= pagesCount) {
        return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1};
    } else {
        return { start: currentPage - ceiling + 1, end: currentPage + floor + 1};
    }
}


const Pagination = ({currentPage, rowsShown, total, limit, handleSetLimit, setCurrentPage, pagesCount, onPageChange, cardSize}) => {

    
    const pagesCut = getPagesCut({pagesCount, pagesCutCount: 5, currentPage});
    
    const pages = range(pagesCut.start, pagesCut.end);
    const isLastPage = currentPage === pagesCount;
    const isFirstPage = currentPage === 1;

    const pagesSelected = range(1, pagesCount+1);

    const selectOptions = pagesSelected.map(page=> {
        return { value: page, label: page}
    })

    const handleSelectOption = (event) => {
        setCurrentPage(event.value);
    }

    

    return (
                <div id="container-pagination">
                    {
                        cardSize > 840 &&
                        <div id="container-pagination-details">
                            <div id="info-pag">
                                <div id="showing-p">Showing {rowsShown} of {total} products and </div>
                                <div id="pag-selec">
                                    page <Select classNamePrefix="react-selector" id="page-selector" options={selectOptions} defaultValue={selectOptions[currentPage-1]} value={selectOptions[currentPage-1]} onChange={handleSelectOption}/> of {pagesCount}
                                </div>
                            </div>
                            <div id="container-detail-limit">
                                
                                <div id="set-limit">
                                    <div>Limit of products per page (currently <b>{limit}</b>) : </div>
                                    <div>
                                        <Form.Control className="input-line" id="set-limit-input"/>
                                    </div>
                                    <div id="set-button-pag"><CardButton handleEvent={handleSetLimit} name="Set" id="card-button_pagination-set"/></div>
                                    <div id="error-limit">Positive integers only</div>
                                </div>
                            </div>
                        </div>
                    }
                    <div id={`${cardSize > 840 ? 'container-pagination-set-BIG' : 'container-pagination-set-SMALL'}`}>
                        {
                            cardSize > 455 ? (
                                <ul className="pagination">
                                    <PaginationItem page="<<" currentPage={currentPage} onPageChange={() => onPageChange(1)} isDisabled={isFirstPage}/>
                                    <PaginationItem page="<" currentPage={currentPage} onPageChange={() => onPageChange(currentPage - 1)} isDisabled={isFirstPage}/>
                                    {
                                        pages.map(page => (
                                            <PaginationItem key={page} page={page} currentPage={currentPage} onPageChange={onPageChange}/>
                                        ))
                                    }
                                    <PaginationItem page=">" currentPage={currentPage} onPageChange={() => onPageChange(currentPage + 1)} isDisabled={isLastPage}/>
                                    <PaginationItem page=">>" currentPage={currentPage} onPageChange={() => onPageChange(pagesCount)} isDisabled={isLastPage}/>
                                </ul>
                            ):(
                                <div id="button-load-small">
                                    <PaginationItemResponsive page="LOAD LESS" currentPage={currentPage} onPageChange={() => onPageChange(currentPage - 1)} isDisabled={isFirstPage}/>
                                    <PaginationItemResponsive page="LOAD MORE" currentPage={currentPage} onPageChange={() => onPageChange(currentPage + 1)} isDisabled={isLastPage}/>
                                    { cardSize <= 356 &&
                                        <div id="ultra-res-pag">
                                            <div id="showing-p">Showing {rowsShown} of {total} products</div>
                                        </div>
                                    }    
                                </div>
                            ) 
                        }
                        
                    </div>
                </div>      
            );
}

export default Pagination;