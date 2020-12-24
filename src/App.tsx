import React from 'react';
import {BrowserRouter} from "react-router-dom";
import s from './App.module.css';
import Header from "./Components/Header/Header";
import ButtonBar from "./Components/ButtonBar/ButtonBar";
import ViewWindow from "./Components/ViewWindow/ViewWindow";

interface IContact {
    contacts: {
        id: number
        name: string
        phone: string
        email: string
        address: string
    }[]
}

function App (props: IContact) {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <div className={s.AppWrapper}>
                    <Header/>
                    <ButtonBar />
                    <ViewWindow contacts={props.contacts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
