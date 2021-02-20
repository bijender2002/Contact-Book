import React from 'react'
import Avatar from 'react-avatar';
import '../App.scss';
function Contact({ contacts }) {
    const { name, phone, email} = contacts;
    return (
        <>
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label"></label>
                    </div>
                </td>
                <td><Avatar name={name} size="50" round={true} className="mr-3" /> {name}</td>
                <td>{phone}</td>
                <td>{email}</td>

            </tr>
        </>
    )
}

export default Contact
