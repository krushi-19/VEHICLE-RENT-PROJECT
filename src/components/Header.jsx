import React from 'react';
import { Alert } from "react-bootstrap";

export function Header(props) {
    const alertStyle = {
        textAlign: 'center',
        boxShadow: 'none', 
        border: 'none',
        backgroundColor: 'transparent', 
    };
    const headingStyle={

        fontSize: '50px', 
        color: 'green',
    };

    return (
        <Alert variant="success" style={alertStyle}>
            <h5 style={headingStyle}>{props.title}</h5>
            <p>{props.description}</p>
        </Alert>
    );
}
