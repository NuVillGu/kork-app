import React from 'react';


function CardTitle({ title, breadcrumb }) {

    return (
            <div className="data-container_card-title">
                <div className="data-container_card-title_title">
                    <div className="card-title_title-value">{title}</div>
                </div>
                <div className="data-container_card-title_breadcrumb">
                    <div className="card-title_breadcrumb-value">
                        {breadcrumb}
                    </div>
                </div>
            </div>
    );

}

export default CardTitle;