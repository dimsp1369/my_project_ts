import React from "react";
import s from './Contact.module.css'


function Contact(props: any) {
    return <div className={s.Main}>
        <div className={s.item}>
            {props.id} {props.name} {props.phone} {props.email} {props.address}
        </div>
    </div>
}

export default Contact