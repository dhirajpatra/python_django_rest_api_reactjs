import React, { Component } from 'react';
import { render } from 'react-dom';


class Details extends Component {
    constructor(props) {
        super();
        this.state = {
            id: 1,
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/articles/" + this.state.id)
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "something went wrong" };
                    })
                }

                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Article Details</h1>
                <ul>

                    <li key={this.state.data.id}>
                        {this.state.data.title} - {this.state.data.description} - {this.state.data.body} - {this.state.data.author_id}
                    </li>

                </ul >
            </div>
        );
    }
}


export default Details;

// const container = document.getElementById("details");
// render(<Details />, container);