import React from 'react';
import { Navbar, Nav , NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Navbar expand="md" style={{background: "black"}}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/tablesearch">
                                <span className="fa fa-home fa-lg"></span>TableSearch
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/tablesort">
                                <span className="fa fa-home fa-lg"></span>TableSort
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/robots">
                                <span className="fa fa-home fa-lg"></span>Robots
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/cards">
                                <span className="fa fa-home fa-lg"></span>Cards
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/tablesearch2">
                                <span className="fa fa-home fa-lg"></span>TableSearch2
                                </NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;