import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './Store';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
function AddContact() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");

    const createContact = e => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        }
        dispatch(addContact(new_contact));
        history.push("/")
    }

    return (
        <div className="container my-5">
            <div className="card border-0 shadow">
                <div className="card-header bg-dark text-white">
                    Add a Contact
            </div>
                <div className="card-body">
                    <form onSubmit={(e) => createContact(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control"
                                placeholder="Enter Your Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control"
                                placeholder="Enter Your Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Create Contact</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
