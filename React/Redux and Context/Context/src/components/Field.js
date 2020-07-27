import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext;

    render(){
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        
        return(
            <div className="ui field">
                <label>{text}</label>
                <input type="text" />
            </div>
        )
    }
}
// Can use ths also instead of static above
//Field.contextType = LanguageContext;

export default Field;