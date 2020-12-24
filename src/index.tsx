import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let contactData = [
    {id: 1, name: 'Sam Smith', phone: '123-4322-3123', email: 'none', address: 'none'},
    {id: 2, name: 'Black Jack', phone: '123-4565-4321', email: 'none', address: 'none'},
    {id: 3, name: 'Alan', phone: '123-4322-2562', email: 'none', address: 'none'},
    {id: 4, name: 'Mister T', phone: '123-4322-3245', email: 'none', address: 'none'},
    {id: 5, name: 'Batman', phone: '123-9999-9999', email: 'none', address: 'none'},
    {id: 6, name: 'Jame Bond', phone: '123-0000-0007', email: 'none', address: 'none'}
]

ReactDOM.render(
    <React.StrictMode>
        <App contacts={contactData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// export class Home extends Component<IContactProps> {
//     public constructor(props: IContactProps) {
//         super(props as any);
//     }
// }

