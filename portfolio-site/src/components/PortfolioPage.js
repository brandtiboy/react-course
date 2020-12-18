import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    return (
        <div>
            <p>This is the portfolio page</p>

            <h2>My work</h2>
            <Link to='/portfolio/1'>Item one</Link>
            <Link to='/portfolio/2'>Item two</Link>
        </div>
    )
}

export default PortfolioPage;