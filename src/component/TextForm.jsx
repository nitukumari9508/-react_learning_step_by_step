//import React from 'react'
import React , {useState} from 'react';
function TextForm(props) {
     const [text, setText] = useState("enter text here")
      const handleUpClick = () => {
    let newText = text.toUpperCase()
        setText(newText)
      }
      const handleOnChange= (event) => {
        setText(event.target.value)
      }
      const handleDownClick = () => {
        let newText = text.toLocaleLowerCase()
            setText(newText)
          }
  return (
    <div>
<h1>{props.heading} </h1>
<div className="mb-3">
  <label for="box" className="form-label"><b>ER Nitu</b></label>
<textarea className="form-control" id="box" rows="7" col ="3" value={text} onChange= {handleOnChange}></textarea>
</div>
<button className="btn btn-primary" onClick = {handleUpClick}>convert to uppercase &nbsp; <style margin="2px"/></button>

<button className="btn btn-primary" onClick = {handleDownClick}>convert to loweCase &nbsp; <style margin="2px"/></button>






    </div>
  )
}

export default TextForm