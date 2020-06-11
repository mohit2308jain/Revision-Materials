import React from 'react';
import { Table, Button } from 'reactstrap';

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

class Content extends React.Component{


    sortByYear = (event) => { 
        let data = this.props.filteredbooks;
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
        let data = this.props.filteredbooks;
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
        let data = this.props.filteredbooks;
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
        let data = this.props.filteredbooks;
        data.sort(function(a,b){
          let n1 = a.title.toUpperCase();
          let n2 = b.title.toUpperCase();
          
          
          if(n1>n2) return 1;
          if(n1<n2) return -1
          return 0;
        })

        this.setState({books: data})
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
                    </thead>
                    <tbody>
                    {ShowTable(this.props.filteredbooks)}
                    </tbody>
                </Table>
            </React.Fragment>

        )
    }
}

export default Content;