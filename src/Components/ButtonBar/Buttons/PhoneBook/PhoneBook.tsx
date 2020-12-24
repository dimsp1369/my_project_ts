import React from "react";
import s from './PhoneBook.module.css'

interface IContact {
    contacts: {
        id: number
        name: string
        phone: string
        email: string
        address: string
    }[]
}


function PhoneBook(props: IContact) {

    return <div className={s.Main}>
        <div className={s.item}>
            {props.contacts.map((contact, i) => <div key={i}>{contact.id} {contact.name} {contact.phone} {contact.email} {contact.address} </div> )}
        </div>
    </div>
}

export default PhoneBook