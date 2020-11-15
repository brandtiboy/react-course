'use strict';

var button = {
    text: 'Show details'
};

var toggleButton = function toggleButton(e) {
    e.preventDefault();

    if (e = button.text) {
        button.text = 'Hide details';
    } else {
        button.text = 'Show details';
    }

    renderVisibleApp();
};

var appRoot = document.getElementById('app');

var renderVisibleApp = function renderVisibleApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleButton },
            button.text
        )
    );

    ReactDOM.render(template, appRoot);
};

renderVisibleApp();
