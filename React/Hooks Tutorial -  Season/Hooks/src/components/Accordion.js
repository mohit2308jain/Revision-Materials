import React from 'react';

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = React.useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderItem = items.map((item, index) => {
        
        const active = (index === activeIndex) ? 'active' : '';
        
        return(
            <React.Fragment key={item.title}>
                <div className={`title ${active}`}
                    onClick={() => onTitleClick(index)} >
                    <i className="dropdown icon" />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return(
        <React.Fragment>
            <div className="ui styled accordion">
                {renderItem}
            </div>
        </React.Fragment>
    )
}

export default Accordion;