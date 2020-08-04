import React from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = React.useState('twice');
    const [debouncedTerm, setDebouncedTerm] = React.useState(term);
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        const timerid = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return(() => {
            clearTimeout(timerid);
        })

    }, [term]);

    React.useEffect(() => {
        const search = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        }
        if(debouncedTerm){
            search();
        }
        
    }, [debouncedTerm])

    const renderedResults = results.map((res) => {
        return(
            <div className="item" key={res.pageid}>
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${res.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {res.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: res.snippet}}></span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;

/*
React.useEffect(() => {
        const search = async() => {
            await axios.get('jnjn');
        }
        
        search();
    }, [term]);
*/

/*
React.useEffect(() => {
        (async() => {
            await axios.get('jnjn');
        })();
        
    }, [term]);
*/

/*
React.useEffect(() => {
        axios.get('bhb')
        .then((res) => console.log());
        
    }, [term]);
*/

/*

//first argument always a function.
    //Inside this function we write code to tell what happens when something changes
    //second argument can be an empty array or array with some or no array at all.
    //only array. Second argument tells when useEffect code will be executed.
    //cannot use async await directly inside useEffect.
    React.useEffect(() => {
        const search = async() => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        if(term && !results.length){
            search();
        }
        else{
            const timeoutId = setTimeout(() => {
                if(term){
                    search();
                }
            }, 1000);
    
            //we can return functions only from useEffect.
            //the returned fuction is actually called when the useEffect is again executed.
            //before the execution of code before this function.
            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [term, results.length]);

*/