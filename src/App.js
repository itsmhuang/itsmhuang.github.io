import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.scss';




import MainSection from './MainSection/MainSection'

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainSection/>
            </div>
        );
    }
}

export default App;
