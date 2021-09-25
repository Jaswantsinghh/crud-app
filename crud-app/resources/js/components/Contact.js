import React from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
    delContact = (id) => {
            this.props.deleteContact(id);
        }
    render(){
        const {contact} = this.props;
        return(
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-1">
                            <span className="image">{contact.fullName[0]}</span>
                        </div>

                        <div className="col-md-2">
                            {contact.fullName}
                        </div>

                        <div className="col-md-1">
                            {contact.urn}
                        </div>

                        <div className="col-md-2">
                            {contact.email}
                        </div>

                        <div className="col-md-1">
                            {contact.category}
                        </div>

                        <div className="col-md-2">
                            {contact.phone}
                        </div>

                        <div className="col-md-1">
                            <Link className="btn btn-warning" to={`/edit/${contact.id}`}>
                                Edit
                            </Link>
                        </div>

                        <div className="col-md-1">
                            <button className="btn btn-danger" onClick={()=>this.delContact(contact.id)}>
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}