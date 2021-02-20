import React from 'react'
import '../App.scss';
import { useSelector } from 'react-redux';
import Contact from './Contact';
function ContactTable(props) {
    const contacts = useSelector(state => state.contacts)
    return (
        <>
            <div className="container">
                <div className="py-3">
                    <table className="table table-light shadow">
                        <thead>
                            <tr>
                                <th>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label"></label>
                                    </div>
                                </th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map(contact => <Contact
                                    contacts={contact} key={contact.id}
                                />)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ContactTable;
