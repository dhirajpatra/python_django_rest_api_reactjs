import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div style={{ flex: 1, padding: "10px", background: "#eeeeee", textAlign: "center" }}>
                <span>All rights reserved &copy; <a href="https://dhirajpatra.github.io">Dhiraj Patra</a></span>
            </div>
        );
    }
}

export default Footer;