import React from 'react';
import axios from 'axios';

export default class AddContacts extends React.Component {
    state = {
        fullName: '',
        urn: '',
        email: '',
        category: '',
        phone: ''
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    saveContact = async (e) => {
        e.preventDefault();
        const res = await axios.post("/contact", this.state);
        this.setState({fullName: '', urn: '', email: '', category: '', phone: ''});
        if(res.data.status === 200)
        {
            this.props.history.push("/");
        }
        //console.log(res);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.saveContact}>
                    <div className="form-group">
                        <input type="text" name="fullName" className="form-control" onChange={this.handleInput} placeholder="Enter full name" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="urn" className="form-control" onChange={this.handleInput} placeholder="Enter urn" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" className="form-control" onChange={this.handleInput} placeholder="Enter email" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="category" className="form-control" onChange={this.handleInput} placeholder="Enter category" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="phone" className="form-control" onChange={this.handleInput} placeholder="Enter phone number" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="submit" name="category" className="btn btn-primary" value="Add Contact">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}