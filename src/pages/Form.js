import React, {useState} from "react";
// import { Link } from "react-router-dom";

const Form = ({initialTodo, history, handleSubmit, buttonLabel}) => {
  const [formData, setFormData] = useState(initialTodo)
  
  // Functions
  const handleChange = (event) => {
    // copy of the current
    // const newState = {...formData}
    // newState[event.target.name] = event.target.value
    // setFormData(newState)
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    handleSubmit(formData)
    history.push("/")
  }

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.subject}
        name="subject"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.details}
        name="details"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};
export default Form;