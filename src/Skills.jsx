import React from "react";
const Gender = () => {
    return (
        <>
        <form>
            <label htmlFor="skills">Skills: </label>
            <input type="checkbox" name="skills"/>
            <label>C++</label>
            <input type="checkbox" name="skills"/>
            <label>Python</label>
            <input type="checkbox" name="skills"/>
            <label>Java</label>
        </form>
        </>
    )
}
export default Gender;