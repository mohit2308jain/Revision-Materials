import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    
    const [open, setOpen] = React.useState(false);

    const ref = React.useRef();

    React.useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return    
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, [])
    
    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null
        }

        return(
            <div key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })
    
    return(
        <React.Fragment>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>
                    <div onClick={() => setOpen(!open)}
                        className={`ui selection dropdown 
                            ${(open) ? 'visible active' : ''}`}>
                        <i className="dropdown icon" />
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${(open) ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dropdown;

/*

import React from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    
    const [open, setOpen] = React.useState(false);
    
    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null
        }

        return(
            <div key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })
    
    return(
        <React.Fragment>
            <div className="ui form">
                <div className="field">
                    <label className="label">Select a Color</label>
                    <div onClick={() => setOpen(!open)}
                        className={`ui selection dropdown 
                            ${(open) ? 'visible active' : ''}`}>
                        <i className="dropdown icon" />
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${(open) ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dropdown;

*/