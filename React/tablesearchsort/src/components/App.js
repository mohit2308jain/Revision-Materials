import React from 'react';
import { Table, Button, Input } from 'reactstrap';
import books1 from '../assets/booklist';



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

class App extends React.Component {
    
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
        
        let data=this.state.books;
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

        if(this.state.id==null && this.state.title==='' && this.state.year==null && this.state.author===''){
            this.setState({books: books1});
            data=[];
            return;
        }
        else{
            if(this.state.id){
                let id = this.state.id.toString().toLocaleLowerCase();
                //data = this.state.books;
                data = data.filter((book) => {
                    return book.id.toString().toLocaleLowerCase().includes(id);
                })
    
                //this.setState({books: data});
            }
    
            if(this.state.title){
                let title = this.state.title.toLocaleLowerCase();
                //data = this.state.books;
                data = data.filter((book) => {
                    return book.title.toString().toLocaleLowerCase().includes(title);
                })
    
                //this.setState({books: data});
            }
    
            if(this.state.year){
                let year = this.state.year.toString().toLocaleLowerCase();
                //data = this.state.books;
                data = data.filter((book) => {
                    return book.year.toString().toLocaleLowerCase().includes(year);
                })
    
                //this.setState({books: data});
            }
    
            if(this.state.author){
                let author = this.state.author.toLocaleLowerCase();
                //data = this.state.books;
                data = data.filter((book) => {
                    return book.author.toString().toLocaleLowerCase().includes(author);
                })
            }

            this.setState({books: data});
        }
    }

    render(){
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
                            <th><Input type="text" name="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange}/></th>
                            <th><Input type="number" name="year" placeholder="Enter Year" value={this.state.year} onChange={this.handleChange}/></th>
                            <th><Input type="text" name="author" placeholder="Enter Author" value={this.state.author} onChange={this.handleChange}/></th>
                        </tr>
                    </thead>
                    <tbody>
                    {ShowTable(this.state.books)}
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default App;