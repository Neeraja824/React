import React from "react";
const Form = () => {
    const Respond = (e) =>{
        console.log("Form Submitted")
    }
    return (
        <>
        <h1>Registration Form</h1>
        <form onSubmit={Respond}>
            <label htmlFor="name">First Name: </label>
            <input type="text" placeholder="Enter your name" />
            <br/>
            <br/>
            <label htmlFor="name">Last Name: </label>
            <input type="text" placeholder="Enter your name" />
            <br/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input type="text" placeholder="Enter your email" />
            <br/>
            <br/>
            <label htmlFor="call">Phone: </label>
            <input type="number" placeholder="Enter your phone +91" />
            <br/>
            <br/>
            <label htmlFor="age">Age: </label>
            <input type="number" placeholder="Enter your age" />
            <br/>
            <br/>
            <label htmlFor="gender">Gender: </label>
            <input type="radio" name="gender"/>
            <label>Male</label>
            <input type="radio" name="gender"/>
            <label>Female</label>
            <input type="radio" name="gender"/>
            <label>Others</label>
            <br/>
            <br/>
            <label htmlFor="skills">Skills: </label>
            <input type="checkbox" name="skills"/>
            <label>C++</label>
            <input type="checkbox" name="skills"/>
            <label>Python</label>
            <input type="checkbox" name="skills"/>
            <label>Java</label>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};
export default Form;