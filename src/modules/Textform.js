import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const Textform = (props) => {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapitalize = () => {
        const capital = text.toLowerCase();
        const newT = capital.charAt(0).toUpperCase() + capital.slice(1)
        setText(newT);
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard");
    }
    const handleSpace = () => {
        let myText = text.split(/[ ]+/);
        setText(myText.join(" "));
    }
    const handleSpeech = () => {
        const speech = new SpeechSynthesisUtterance();
        const message = text;
        speech.lang = 'eng';
        speech.text = message;
        window.speechSynthesis.speak(speech); 
    }
    const handleClear = () => {
        setText('');
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container mt-5">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} rows={11} onChange={handleChange}></textarea>
        <span>
            <button className="btn btn-danger mt-2 my-1" onClick={handleUpperCase}>Convert to UPPERCASE</button>
            <button className="btn btn-warning mt-2 mx-2 my-1" onClick={handleLowerCase}>Convert to lowercase</button>
            <button className="btn btn-primary mt-2 mx-2 my-1" onClick={handleCapitalize}>Capitalize</button>
            <button className="btn btn-success mt-2 mx-2 my-1" onClick={handleCopyClipboard}>Copy to clipboard</button>
            <button className="btn btn-danger mt-2 mx-2 my-1" onClick={handleSpace}>Remove extra space</button>
            <button className="btn btn-warning mt-2 mx-2 my-1" onClick={handleSpeech}>Text to speech</button>
            <button className="btn btn-success mt-2 mx-2 my-1" onClick={handleClear}>Clear</button>
        </span>
    </div>
    <div className="container mt-3">
        <h3>Summary</h3>
        <p>You have written {text.length===0?0:text.split(" ").length} words & {text.length} characters.</p>
        <p>{(1/300) * text.split(" ").length} Minutes read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

Textform.defaultProps = {
    heading : "Enter heading here",
}

Textform.propTypes = {
    heading : PropTypes.string
}
