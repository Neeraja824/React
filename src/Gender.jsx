import React from "react";
const Gender = () => {
    return (
        <>
        <form>
            <label htmlFor="gender">Gender: </label>
            <input type="radio" name="gender"/>
            <label>Male</label>
            <input type="radio" name="gender"/>
            <label>Female</label>
            <input type="radio" name="gender"/>
            <label>Others</label>
        </form>
        </>
    )
}
export default Gender;