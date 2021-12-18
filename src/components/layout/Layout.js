import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Login from "../login/Login";
import Contact from "../contact/Contact";
import SpacecraftList from "../home/SpacecraftList";


function Layout() {
    return (
        <Router>
            <Navbar bg="$colour-background" variant="dark" expand="lg">
            <Navbar.Brand href="/">COURSE ASSIGNMENT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink exact to ="/" className= "nav-link">Home</NavLink>
                        <NavLink exact to="/login/" className="nav-link">Login</NavLink>
                        <NavLink exact to="/contact/" className="nav-link">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container>
    <Switch>
                    <Route path="/" exact component={SpacecraftList} />
                    <Route path="/detail/:name"/>
                    <Route path="/detail/:id" />
     <Route path="/login" component={Login} />
     <Route path="/contact" component={Contact} />
    </Switch>
   </Container>
        </Router>
    );
}

export default Layout;