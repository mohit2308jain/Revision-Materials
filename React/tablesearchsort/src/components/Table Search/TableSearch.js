import React from 'react';
import { Table, Button, Input } from 'reactstrap';
import books1 from '../../assets/booklist.json';

const ShowTable = (bookss) => {
    const rows = bookss.map((book) => {
        return (
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.year}</td>
                <td>{book.author}</td>
            </tr>
        );
    })

    return rows;
}

class TableSearch extends React.Component {
    
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

    sortByYear = (event) => { 
        let data = this.state.books;
        data.sort(function(a,b){
          let n1 = a.year;
          let n2 = b.year;
          
          if(n1>n2) return 1;
          if(n1<n2) return -1
          return 0;
        })

        this.setState({books: data})
    }
    
    sortById = (event) => { 
        let data = this.state.books;
        data.sort(function(a,b){
            let n1 = a.id;
            let n2 = b.id;
            
            if(n1>n2) return 1;
            if(n1<n2) return -1
            return 0;
        })

        this.setState({books: data})
    }
    
    sortByName = (event) => { 
        let data = this.state.books;
        data.sort(function(a,b){
          let n1 = a.author.toUpperCase();
          let n2 = b.author.toUpperCase();
          
          if(n1>n2) return 1;
          if(n1<n2) return -1
          return 0;
        })

        this.setState({books: data})
    }
    
    sortByTitle = (event) => { 
        let data = this.state.books;
        data.sort(function(a,b){
          let n1 = a.title.toUpperCase();
          let n2 = b.title.toUpperCase();
          
          
          if(n1>n2) return 1;
          if(n1<n2) return -1
          return 0;
        })

        this.setState({books: data})
    }

    handleChange = (event) => {
        
        if(event.target.name==="id"){
            this.setState({id: event.target.value})
        }
        else if(event.target.name==="title"){
            this.setState({title: event.target.value});
        }
        else if(event.target.name==="year"){
            this.setState({year: event.target.value});
        }
        else if(event.target.name==="author"){
            this.setState({author: event.target.value});
        }
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
                <Table>
                    <thead>
                        <tr>
                            <th><Button color="link" active onClick={event => this.sortById(event)}>Id</Button></th>
                            <th><Button color="link" active onClick={event => this.sortByTitle(event)}>Title</Button></th>
                            <th><Button color="link" active onClick={event => this.sortByYear(event)}>Year</Button></th>
                            <th><Button color="link" active onClick={event => this.sortByName(event)}>Author</Button></th>
                        </tr>
                        <tr>
                            <th><Input type="number" name="id" placeholder="Enter Id" value={this.state.id} onChange={this.handleChange}/></th>
                            <th><Input type="text" name="title" placeholder="Enter Title"    onChange={this.handleChange}/></th>
                            <th><Input type="number" name="year" placeholder="Enter Year" value={this.state.year} onChange={this.handleChange}/></th>
                            <th><Input type="text" name="author" placeholder="Enter Author" value={this.state.author} onChange={this.handleChange}/></th>
                        </tr>
                    </thead>
                    <tbody>
                    {ShowTable(filteredBooks)}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default TableSearch;