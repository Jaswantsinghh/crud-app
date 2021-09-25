import React from 'react';
import axios from 'axios';

export default class EditContact extends React.Component {
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
    updateContact = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/contact/${id}`, this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }
    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`/contact/${id}/edit`);
        this.setState({fullName: res.data.contact.fullName});
        this.setState({urn: res.data.contact.urn});
        this.setState({email: res.data.contact.email});
        this.setState({category: res.data.contact.category});
        this.setState({phone: res.data.contact.phone});
    }
    render(){
        return(
            <div>
                <form onSubmit={this.updateContact}>
                    <div className="form-group">
                        <input type="text" name="fullName" value={this.state.fullName} className="form-control" onChange={this.handleInput} placeholder="Enter full name" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="urn" value={this.state.urn} className="form-control" onChange={this.handleInput} placeholder="Enter urn" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" value={this.state.email} className="form-control" onChange={this.handleInput} placeholder="Enter email" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="category" value={this.state.category} className="form-control" onChange={this.handleInput} placeholder="Enter category" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="phone" value={this.state.phone} className="form-control" onChange={this.handleInput} placeholder="Enter phone number" required>
                        </input>
                    </div>

                    <div className="form-group">
                        <input type="submit" name="category" className="btn btn-primary" value="Edit Contact">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}