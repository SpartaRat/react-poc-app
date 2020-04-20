import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <Routes />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
