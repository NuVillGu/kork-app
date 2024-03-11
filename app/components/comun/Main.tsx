'use client'

import React, { useState, useEffect, useRef, createContext } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
export { CardSizeContext };


const CardSizeContext = createContext();


function Main ({ children }) {

    const ref = useRef(null);

    const [sidebarStatus, setSidebarStatus] = useState("sidebar_open");
    const [dataContainerStatus, setDataContainerStatus] = useState("data-container_open");
    const [status, setStatus] = useState("close");
    const [sidebarSize, setSidebarSize] = useState(0);

    const initialSize = window.innerWidth - document.getElementById("sidebar_open");
    
    const [cardSize, setCardSize] = useState(initialSize); /**rev**/


    useEffect(() => {

        const handleResize = () => {
            if (ref.current) {
                setCardSize(ref.current.offsetWidth);
            }
        };
        
        handleResize(); 

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);


    const handleMenu = () => {

        const sidebarElement = document.getElementById("sidebar_open");
        const cardElement = ref.current;
        
        if (sidebarElement) {
            setCardSize(cardElement.offsetWidth + sidebarElement.clientWidth);
            setSidebarSize(sidebarElement.clientWidth);
        } else {
            setCardSize(cardElement.offsetWidth - sidebarSize);
            setSidebarSize(0);
        }

        if (status === "open") {
            setSidebarStatus("sidebar_open");
            setDataContainerStatus("data-container_open");
            setStatus("close");
        } else {
            setSidebarStatus("sidebar_close");
            setDataContainerStatus("data-container_close");
            setStatus("open");
        }

    };


    return (
                <CardSizeContext.Provider value={cardSize}>
                    <div>
                        <Sidebar id={sidebarStatus}/>
                        <Header handle={handleMenu}/>
                        <div id={dataContainerStatus}>
                            <div id="data-container">
                                <div id="data-container_aux">
                                    <div id="card-data" ref={ref}>
                                        <div id="card-data_body">
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardSizeContext.Provider>
            );
}

export default Main;
