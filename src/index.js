import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'your-youtube-api';

// Create a new component. This component should produce some html.
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

//Take this component's generated HTML and put it on the page (in the DOM)
// App is a class
// <App /> is an instance of the App class
// It renders an instance of App component into the container div target
ReactDOM.render(<App/>, document.querySelector(".container"));