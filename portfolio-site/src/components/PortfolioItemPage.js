import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h3>A thing i done</h3>
        <p>This page is for the item with the id of {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage;