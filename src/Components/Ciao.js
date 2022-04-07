import { useState } from 'react';
import Chat from './Chat';



const userName = "Arman";
const contacts = ["Jack", "Stan", "Sarah", "Robert"];

export default function Ciao() {

    const [personName, setPersonName] = useState("Ciao!");


    const handleClick = (e) => {
        setPersonName(e.target.innerHTML);
    }

    const mappedList = contacts.map(item => (<li className="nav-item" onClick={handleClick} key={item}>{item}</li>));

    return (
        <>
            <nav id="navbar">
                <div id="user-banner">
                    <div id="profile-pic"><i className="bi bi-person-circle"></i></div>
                    <div id="more" title="Settings (Coming soon!)"><i className="bi bi-three-dots"></i></div>
                </div>
                <ul id="nav-list">
                    { mappedList }
                </ul>
            </nav>
            {personName === "Ciao!" ? <div id="ciao">{personName}</div> : <Chat id="display" userName={userName} contactName={personName} />}
        </>
    );
}