import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import 'tachyons';
import './index.css';

ReactDOM.render(<App />,document.getElementById('root'));

/*
    componentDidMount(){
        const url = './assets/booklist.json';
        axios.get(url)
            .then((res) => this.setState({data: res.data}))
            .catch((err) => this.setState({error: err, data: undefined}));
        
        console.log(this.state.data);
        console.log(this.state.error);
    }
*/