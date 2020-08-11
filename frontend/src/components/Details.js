import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { useParams } from 'react-router';


class Details extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    getId() {
        let articleId = this.props.match.params.articleId;
        return articleId;
    }

    componentDidMount() {
        fetch(`api/articles/${this.getId()}`)
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
            })
            .catch(err => {
                console.error("Error:", err)
            });
    }

    render() {
        return (
            <div>
                <h1>Article Details</h1>
                <div>
                    <span>Title:</span><span>{this.state.data.title}</span>
                </div>
                <div>
                    <span>Description:</span><span>{this.state.data.description}</span>
                </div>
                <div>
                    <span>Body:</span><span>{this.state.data.body}</span>
                </div>
                <div>
                    <span>Author</span>
                    <div>
                        <span>ID:</span><span>{this.state.data.author_id}</span>
                    </div>
                    <div>
                        <span>Name:</span><span>{this.state.data.author_name}</span>
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(Details);
