import React from 'react';
import { withRouter } from 'react-router-dom';

class Create extends React.Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            values: {
                title: '',
                description: '',
                body: '',
                author: ''
            },
            isSubmitting: false,
            isError: false,
            message: ''
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
                "Content-Type": "application/json"
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
                console.error("Error:", err)
            });
    }

    render() {
        return (
            <form className="simple-form" onSubmit={this.handleSubmit} >
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
                    <textarea name="body" onChange={this.handleInputChange} required>                        </textarea>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Author:
                        <select name="author" onChange={this.handleInputChange}>
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

export default withRouter(Create);