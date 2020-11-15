const button = {
    text: 'Show details'
}

const toggleButton = (e) => {
    e.preventDefault()

    renderVisibleApp()
}

const appRoot = document.getElementById('app');

const renderVisibleApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleButton}>{button.text}</button>
        </div>
    )

    ReactDOM.render(template, appRoot);
}

renderVisibleApp();