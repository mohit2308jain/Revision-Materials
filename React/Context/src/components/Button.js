import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
    renderSubmit = (value) => {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton = (color) => {
        return(<button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* This function will be automatically invoked
                        give the value of conusmer which conatins 
                        the context value */}
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>)
    }

    render(){
        return(
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}
// Can use ths also instead of static above
//Button.contextType = LanguageContext;

export default Button; 

/*
{ only fuction is given as child to consumer }
<ColorContext.Consumer>
{(color) => 
    (<button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
            { This function will be automatically invoked
                give the value of conusmer which conatins 
                the context value }
            {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
    </button>)
}
</ColorContext.Consumer>
*/