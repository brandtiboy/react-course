import { createStore, combineReducers } from 'react';

const demoState = {
    expenses: [{
        id: 'fewfewf',
        description: 'January Rent',
        note: 'This was tje final payment',
        amount: 43211,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};