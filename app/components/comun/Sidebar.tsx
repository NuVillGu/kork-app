import React from 'react';
import { Accordion } from 'react-bootstrap';
import Link from '@/node_modules/next/link';
import { usePathname } from '@/node_modules/next/navigation';


function Sidebar({ id }) {
    
    const pathname = usePathname();

    const menuItems = {
        HOME: [{ name: 'DASHBOARD', href: '/' }],
        PRODUCTS: [{ name: 'ADD PRODUCT', href: '/products/create' }, { name: 'PRODUCTS LIST', href: '/products/list' }],
        USERS: [{ name: 'ADD USER', href: '/users/create' }, { name: 'USERS LIST', href: '/users/list' }],
        LOGISTIC: [{ name: 'ORDERS LIST', href: '/logistic/orders' }, { name: 'RETURNS LIST', href: '/logistic/returns' }, { name: 'DELIVERY STATUS', href: '/logistic/delivery' }],
        REVIEWS: [{ name: 'REVIEWS LIST', href: '/reviews/list' }]
    };

    const renderSidebarItemsBtn = (item) => (
        <Accordion.Body key={item.name}>
            <Link href={item.href} style={{ backgroundColor: pathname === item.href ? "black" : "white", color: pathname === item.href ? "white" : "black" }}>{item.name}</Link>
        </Accordion.Body>
    );

    const renderSidebarItems = () => (
        Object.entries(menuItems).map(([title, items]) => (
            <Accordion flush key={title}>
                <Accordion.Item>
                    <Accordion.Header>{title}</Accordion.Header>
                    {items.map(renderSidebarItemsBtn)}
                </Accordion.Item>
            </Accordion>
        ))
    );

    return (
                <div id={id} className="sidebar">
                    <div id="sidebar_no-responsive" className="sidebar_menu-items">
                        {renderSidebarItems()}
                    </div>
                </div>
            );
}

export default Sidebar;
