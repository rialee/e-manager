import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./style.css";




function Header() {

    return (
        
        <Jumbotron fluid>
            <Container>
                <h1>E-Meet Network</h1>
                <p>
                A place to get to know fellow coworkers
                </p>
            </Container>
        </Jumbotron>
        
    )
};

export default Header;