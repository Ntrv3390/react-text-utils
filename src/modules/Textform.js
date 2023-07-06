import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Textform = (props) => {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text to get started');
  return (
    <div className="container mt-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} rows={18} onChange={handleChange}></textarea>
        <span>
            <button className="btn btn-danger mt-2" onClick={handleUpperCase}>Convert to uppercase</button>
            <button className="btn btn-warning mt-2 mx-2" onClick={handleLowerCase}>Convert to lowercase</button>
        </span>
    </div>
  )
}

Textform.defaultProps = {
    heading : "Enter heading here",
}

Textform.propTypes = {
    heading : PropTypes.string
}
