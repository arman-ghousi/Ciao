import { useState, useEffect, useRef } from 'react';
import Picker from 'emoji-picker-react';
import Bubble from './Bubble';
import getTimeStamp from '../utils';
import defaultMessages from './messages';




export default function Chat({ id, userName, contactName }) {
    
    const [messageContent, setMessageContent] = useState(null);
    const [messages, setMessages] = useState(defaultMessages);
    const [pickerDisplay, setPickerDisplay] = useState(false);
    // const [selectedFile, setSelectedFile] = useState(null);
    const fileInput = useRef(null);

    const messageId = messages[messages.length - 1].id + 1;

    const sendMessage = (messageObj) => {
        setMessages(prevMessages => [...prevMessages, messageObj]);
    }

    const handleSubmit = (event) => {
        if (messageContent) {
            let newMessage = {id: messageId, sender: userName, receiver: contactName, content: messageContent, timestamp: getTimeStamp(), sent: true};
            sendMessage(newMessage);
            setMessageContent("");
        }
        // else if (selectedFile) {
        //     let fileData = new FormData();
        //     fileData.append("user file", selectedFile, selectedFile.name);
        //     sendMessage(fileData);
        //     setSelectedFile(null);
        // }
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
        setPickerDisplay(false);
    }

    // Adapted from https://stackoverflow.com/a/55331000
    const handleFileDialogue = (event) => {
        fileInput.current.click();
    }

    const onEmojiClick = (event, emojiObject) => {
        setMessageContent(messageContent => [messageContent, emojiObject.emoji].join(""));
        document.getElementById('message').focus();
    }

    // Adapted from https://stackoverflow.com/a/270628
    useEffect(() => {
        const chatContainer = document.getElementById('chat');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });

    const chatMessages = messages
                         .filter(el => (el.sender === userName && el.receiver === contactName) || (el.sender === contactName && el.receiver === userName))
                         .map(el => <Bubble key={el.id} sent={el.sent} content={el.content} timestamp={el.timestamp} />);

    return (
        <div id={id}>
            <h1 id="name-tag">{contactName}</h1>
            <div id="chat-section">
                <div id="chat">
                    {chatMessages}
                </div>
                <div id="actions">
                {pickerDisplay ? <Picker onEmojiClick={onEmojiClick} pickerStyle={{ position: 'absolute', bottom: '55px', boxShadow: 'none', margin: '0' }} /> : null}
                    <button className="action" title="Emoji" onClick={() => setPickerDisplay(pickerDisplay => !pickerDisplay)}><i className="bi bi-emoji-smile"></i></button>
                    {/* <input type="file" ref={fileInput} onChange={(event) => setSelectedFile(event.target.files[0])} hidden /> */}
                    <button className="action" title="Attach a file (Coming soon!)" onClick={handleFileDialogue}><i className="bi bi-paperclip"></i></button>
                    <input id="message" type="text" placeholder="Type your message" autoComplete="off" onKeyDown={handleEnter} value={messageContent} onChange={(event) => setMessageContent(messageContent => event.target.value)} />
                    <button className="action" title="Send message" onClick={handleSubmit}><i className="bi bi-send"></i></button>
                </div>
            </div>
        </div>
    );
}