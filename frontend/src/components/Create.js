import React from 'react';
import { withRouter } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import { Redirect } from "react-router-dom";

var csrftoken = getCookie('csrftoken');

class Create extends React.Component {
    constructor(props) {
        super();

        this.state = {
            data: [],
            values: {
                title: null,
                description: null,
                body: null,
                author_id: null
            },
            isSubmitting: false,
            isError: false,
            message: '',
            redirect: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = e =>
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.values);
        this.setState({ isSubmitting: true });
        fetch("api/articles/", {
            method: "POST",
            body: JSON.stringify(this.state.values),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        })
            .then(res => {
                this.setState({ isSubmitting: false });
                return res.json();
            })
            .then(data => {
                console.log(data);
                !data.hasOwnProperty("error")
                    ? this.setState({ message: data.success })
                    : this.setState({ message: data.error, isError: true });
                this.setState({ redirect: true });
            });
    }

    componentDidMount() {
        fetch("api/authors")
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
                console.log("Error:", err)
            });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <form className="simple-form" onSubmit={this.handleSubmit} >
                <CSRFToken />
                <div className="form-group">
                    <label>
                        Title:
                    <input type="text" name="title" onChange={this.handleInputChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Description:
                    <input type="text" name="description" onChange={this.handleInputChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Body:
                    <textarea name="body" onChange={this.handleInputChange} required></textarea>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Author:
                        <select name="author_id" onChange={this.handleInputChange}>
                            {
                                this.state.data.map(author => {
                                    return (
                                        <option key={author.id} value={author.id}>
                                            {author.name} - {author.email}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </label>
                </div>
                <div className="form-group">
                    <input type="submit" />
                </div>
            </form >
        );
    }
}

// for csrf_token
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export default withRouter(Create);