'use client'

import React, { useState, useEffect, useContext } from "react";
import { FormCheck } from "@/node_modules/react-bootstrap/esm/index";
import Table from "@/node_modules/react-bootstrap/esm/Table";
import Pagination from "./Pagination";
import BtnActions from "./BtnActions";
import ContentMedium from "./ContentMedium";
import ContentSmall from "./ContentSmall";
import ContentLarge from "./ContentLarge";
import CardButton from "../CardButton";
import { Form } from "@/node_modules/react-bootstrap/esm/index";
import { deleteProduct } from "@/app/lib/actions";
import { CardSizeContext } from "../comun/Main";


function Datatable({ items, columns, type }) {

    const cardSize = useContext(CardSizeContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [rowsShown, setRowsShown] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState("");
    const [prevSearchTerm, setPrevSearchTerm] = useState("");
    const [totalPages, setTotalPages] = useState(1);

    const [elements, setElements] = useState(items);
    const [seleccionado, setSeleccionados] = useState(0);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        const filteredAndSortedElements = filterAndSortElements(elements);
        const pagesCount = Math.ceil(filteredAndSortedElements.length / limit);
        setTotalPages(pagesCount);
        setRowsShown(filteredAndSortedElements.slice(startIndex, endIndex));

        
        if ((searchTerm === "" && prevSearchTerm !== "") || (prevSearchTerm !== searchTerm)) {
            setCurrentPage(1);
        } else if (currentPage > pagesCount) {
            setCurrentPage(pagesCount);
        }

        setPrevSearchTerm(searchTerm);
    }, [currentPage, elements, limit, searchTerm, sortConfig, prevSearchTerm]);
    


    const filterAndSortElements = (elements) => {
        let filteredElements = elements.filter(element => {
            return element.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    
        if (sortConfig && sortConfig.key) {
            filteredElements.sort((a, b) => {
                if (sortConfig.key === 'price') {
                    return comparePrices(a, b) * (sortConfig.direction === 'asc' ? 1 : -1);
                } else {
                    const aValue = a[sortConfig.key];
                    const bValue = b[sortConfig.key];
                    if (sortConfig.direction === 'asc') {
                        return aValue < bValue ? -1 : 1;
                    } else {
                        return aValue > bValue ? -1 : 1;
                    }
                }
            });
        }
    
        return filteredElements;
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const comparePrices = (a, b) => {
        const priceA = a.onsale_price || a.price;
        const priceB = b.onsale_price || b.price;
        return priceA - priceB;
    };


    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name == "check_all") {
            if (checked == true) {
                const checked_value = elements.map( (element) => { return {...element, isChecked:checked} });
                setElements(checked_value);
                setSeleccionados(elements.length);
                setDisabled(false);
            } else {
                const checked_value = elements.map( (element) => { return {...element, isChecked:checked} });
                setElements(checked_value);
                setSeleccionados(0);
                setDisabled(true);
            }
        } else {
            if (checked == true) {
                const checked_value = elements.map( (element) => element.id == name ? {...element, isChecked:checked} : element );
                setElements(checked_value);
                setSeleccionados(seleccionado+1);
                setDisabled(false);
            } else {
                const checked_value = elements.map( (element) => element.id == name ? {...element, isChecked:checked} : element );
                setElements(checked_value);
                setSeleccionados(seleccionado-1);
                setDisabled(false);
                if (seleccionado - 1 == 0) {
                    setDisabled(true);
                }
            }
        }
    }

    const handleDeleteSelected = () => {
        const selectedElements = elements.filter(element => element.isChecked);
        const selectedIds = selectedElements.map(element => parseInt(element.id));
        const idList = selectedIds.join(',');
        deleteProduct(idList);

        const updatedElements = elements.filter(element => !selectedIds.includes(parseInt(element.id)));
        setElements(updatedElements);
        setSeleccionados(0);
        setDisabled(true);
    }

    const handleSetLimit = () => {
        const regex = /^\d*$/;
        const input = document.getElementById("set-limit-input");
        const error = document.getElementById("error-limit");

        if (regex.test(input.value) && input.value !== "") {
            setLimit(parseInt(input.value));
            error.style.display = "none";
        } else {
            setLimit(5);
            error.style.display = "block";
        }
    }

    return (
        <div className="datatable-card">
            <div id="info-sup">
                {cardSize <= 840 ? (
                    <div id={`${cardSize <= 356 ? 'res-mob-ultra' : 'res-mob'}`}>
                        <div id={`${cardSize <= 415 ? 'res-1-ultra' : 'res-1'}`}>
                            <CardButton handleEvent={() => handleDeleteSelected()} name="Delete selected" id="card-button_datatable_delete" hidden={disabled}/>
                            <CardButton name="Export CSV" id="card-button_datatable_csv" hidden={disabled}/>
                            <CardButton name="Filtering" span="0" id="card-button_datatable_filtering"/> 
                        </div>
                        <div id="res-2">
                            <div id="card-list_actions_filtering_search">
                                <div>
                                    <Form.Control className="input-line" id="datatable-search-input" value={searchTerm} placeholder="SEARCH" onChange={handleSearch}/>
                                </div>
                            </div>  
                        </div>
                        <div>
                            { cardSize > 356 ? (
                                    <div className="set-limit-ultra-res-actions" id="set-limit">
                                        <div>Limit of products per page (currently <b>{limit}</b>) : </div>
                                        <div>
                                            <Form.Control className="input-line" id="set-limit-input"/>
                                        </div>
                                        <div id="set-button-pag"><CardButton handleEvent={handleSetLimit} name="Set" id="card-button_pagination-set"/></div>
                                    </div>
                            ) : (
                                    <div className="set-limit-ultra-res-actions">
                                        <div id="x-1">Limit of products per page (currently <b>{limit}</b>): </div>
                                        <div id="x-2">
                                            <div>
                                                <Form.Control className="input-line" id="set-limit-input"/>
                                            </div>
                                            <div id="set-button-pag"><CardButton handleEvent={handleSetLimit} name="Set" id="card-button_pagination-set"/></div>
                                        </div>
                                    </div>
                            )}
                            <div id="error-limit">Positive integers only</div>
                        </div>
                    </div>
                ) : (
                    <div id="card-list_actions">
                        <div>
                            <CardButton handleEvent={() => handleDeleteSelected()} name="Delete selected" id="card-button_datatable_delete" hidden={disabled}/>
                            <CardButton name="Export CSV" id="card-button_datatable_csv" hidden={disabled}/>
                            <CardButton name="Filtering" span="0" id="card-button_datatable_filtering"/>
                        </div>
                        <div id="card-list_actions_filtering_search">
                            <div>
                                <Form.Control className="input-line" id="datatable-search-input" value={searchTerm} placeholder="SEARCH" onChange={handleSearch}/>
                            </div>
                        </div>  
                    </div>
                )}
                {cardSize <= 840 ? (
                    <div id={`${cardSize <= 356 ? 'res-actions-1-mob' : 'res-actions-1'}`}>
                        <div className="rows-selected" id={`rows-selected_${disabled}`}>
                            <span>{seleccionado}</span> rows selected
                        </div>
                        { cardSize > 356 &&
                            <div id="action-ultra-res-pag">
                                <div id="showing-p">Showing {rowsShown.length} of {elements.length} products</div>
                            </div>
                        }
                    </div>
                ) : (
                    <div className="rows-selected" id={`rows-selected_${disabled}`}>
                        <span>{seleccionado}</span> rows selected
                    </div>
                )}
            </div>
            {cardSize > 1050 ? (
                <Table className="datatable_no-responsive">
                    <thead>
                        <tr>
                            <th>
                                <FormCheck name="check_all" checked={ !elements.some( (element) => element?.isChecked != true ) } onChange={handleChange}/>
                            </th>
                            {columns.map((column, index) => (
                                column.sortable == true ? (
                                    <th key={index} onClick={() => requestSort(column.key)} className="th-sortable">
                                        <div className="sortable-box">
                                            <div>{column.value}</div>
                                            {sortConfig && sortConfig.key === column.key && (
                                                <div className="icon-sort">{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</div>
                                            )}
                                        </div>
                                    </th>
                                ) : (
                                    <th key={index}>
                                        {column.value}
                                    </th>
                                )
                                
                            ))}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(limit > 0 ? rowsShown : elements).map((element, index) => (
                            <tr className={`tr-checked_${element?.isChecked || false} ${index % 2 === 0 ? 'even-row' : 'odd-row'}`} key={index}>
                                <td>
                                    <FormCheck name={element.id} checked={ element?.isChecked || false } onChange={handleChange}/>
                                </td>
                                <ContentLarge element={element} type={type}/>
                                <td>
                                    <BtnActions setDisabled={setDisabled} setSeleccionados={setSeleccionados} elements={elements} setElements={setElements} className="datatable-btn-actions" id={element.id}/>
                                </td>
                            </tr>               
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Table className="datatable_responsive">
                    <thead>
                        <tr>
                            <th colSpan="3">
                                <FormCheck name="check_all" checked={ !elements.some( (element) => element?.isChecked != true ) } onChange={handleChange}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(limit > 0 ? rowsShown : elements).map((element, index) => (
                            <tr className={`tr-checked_${element?.isChecked || false}`} key={index}>
                                { cardSize > 455 &&
                                    <td className="datatable-check_responsive">
                                        <FormCheck name={element.id} checked={ element?.isChecked || false } onChange={handleChange}/>
                                    </td>
                                }
                                <td>
                                    { cardSize > 660 ? (
                                        <ContentMedium cardSize={cardSize} element={element} type={type}/>
                                    ) : (
                                        <div className="datatable-properties_responsive-mobile">
                                            {cardSize <= 455 &&
                                                <div className="properties-actions_responsive-mobile">
                                                    <FormCheck name={element.id} checked={ element?.isChecked || false } onChange={handleChange}/>
                                                    <BtnActions setDisabled={setDisabled} setSeleccionados={setSeleccionados} elements={elements} setElements={setElements} className="datatable-btn-actions" id={element.id}/>
                                                </div>
                                            }
                                            <ContentSmall cardSize={cardSize} element={element} type={type}/>
                                        </div>
                                    )}
                                </td>
                                { cardSize > 660 ? (
                                    <td className="datatable-actions_responsive">
                                        <BtnActions setDisabled={setDisabled} setSeleccionados={setSeleccionados} elements={elements} setElements={setElements} className="datatable-btn-actions" id={element.id}/>
                                    </td>
                                ) : (
                                    cardSize > 455 &&
                                        <td className="datatable-actions_responsive-mobile">
                                            <BtnActions setDisabled={setDisabled} setSeleccionados={setSeleccionados} elements={elements} setElements={setElements} className="datatable-btn-actions" id={element.id}/>
                                        </td>
                                )}
                            </tr>               
                        ))}
                    </tbody>
                </Table>
            )}
            <Pagination cardSize={cardSize} currentPage={currentPage} rowsShown={rowsShown.length} setCurrentPage={setCurrentPage} limit={limit} handleSetLimit={handleSetLimit} total={elements.length} onPageChange={(page) => setCurrentPage(page)} pagesCount={totalPages}/>
        </div>
    );
}

export default Datatable;
