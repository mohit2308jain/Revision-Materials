import React from 'react';
import { Table, Button } from 'reactstrap';
import books1 from '../../assets/booklist.json';
import SearchBox from './SearchBox';
import Content from "./Content";

class TableSearch2 extends React.Component {
    
    state = {
        books: [],
        id: null,
        title: '',
        year: null,
        author: ''
    }

    componentDidMount(){
        this.setState({books: books1})
    }

    componentDidUpdate(){
        console.log(this.state);
    }


    onIdSearch = (event) => {
        this.setState({id: event.target.value});
    }

    onTitleSearch = (event) => {
        this.setState({title: event.target.value});
    }

    onYearSearch = (event) => {
        this.setState({year: event.target.value});
    }

    onAuthorSearch = (event) => {
        this.setState({author: event.target.value});
    }

    render(){
        const { books, id, title, year, author} = this.state;
        let filteredBooks = books;
        
        if(id){
            filteredBooks = filteredBooks.filter((book) => {
                return book.id.toString().includes(id.toString());
            })
        }
        
        if(title){
            filteredBooks = filteredBooks.filter((book) => {
                return book.title.toLowerCase().includes(title.toLowerCase());
            })
        }

        if(year){
            filteredBooks = filteredBooks.filter((book) => {
                return book.year.toString().includes(year.toString());
            })
        }

        if(author){
            filteredBooks = filteredBooks.filter((book) => {
                return book.author.toLowerCase().includes(author.toLowerCase());
            })
        }

        return(
            <React.Fragment>
                <SearchBox searchIdChange={this.onIdSearch} searchTitleChange={this.onTitleSearch} 
                searchYearChange={this.onYearSearch} searchAuthorChange={this.onAuthorSearch}/>
                <Content filteredbooks={filteredBooks} />
            </React.Fragment>
        )
    }
}

export default TableSearch2;