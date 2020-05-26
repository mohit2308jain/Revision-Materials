import React from 'react';
import { Media } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderLeader = ({ leader }) => {
    return(
        <Media>
            <Media left>
                <Media object src={baseUrl + leader.image} alt={leader.name} />
            </Media>
            <Media body>
                <Media list>
                    <Media heading>{leader.name}</Media>
                </Media>
                <Media list>
                    {leader.designation}
                </Media>
                <Media list className="mt-3 mb-3">
                    {leader.description}
                </Media>
            </Media>
        </Media>
    )
}

const RenderLeaders = (props) => {
    console.log(props.leaders)
    if (props.leaders.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.leaders.errMess) {
        return(
            <div className="container">
                <div className="row">  
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else{
        return(
            <Stagger in>
                {props.leaders.leaders.map((leader) => {
                    return (
                        <Fade in key={leader.id}>
                            <div className="col-12 m-1">
                                <RenderLeader leader={leader} />
                            </div>
                        </Fade>
                    )
                })
            }
            </Stagger>
        )
    }
}

const FetchExample = (props) => {

    return(
        <div className="container">

            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        <RenderLeaders leaders={props.leaders} />
                    </Media>
                </div>
            </div>
            
        </div>
    );
}

export default FetchExample;    