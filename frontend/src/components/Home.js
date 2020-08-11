import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/articles")
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
                <h1>All Articles</h1>
                <ul>
                    {
                        this.state.data.map(article => {
                            let link = '/' + article.id
                            return (
                                <li key={article.id}>
                                    <Link to={link}>{article.title}</Link> - { article.description} - { article.body}
                                </li>
                            );
                        })
                    }
                </ul >
            </div>
        );
    }
}


export default Home;