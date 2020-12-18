import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioDashboard from '../components/PortfolioDashboard';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={PortfolioDashboard} exact={true} />
            <Route path="/portfolio/:id" component={PortfolioItemPage} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
    </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;