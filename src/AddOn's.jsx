import React from "react";
// import CountUp from "react-countup";
import './App.css';
import Confetti from 'react-confetti'
// import Tilty from "react-tilty";
// import Image from "./assets/react.svg";
// import { DNA } from "react-loader-spinner";
// import { ToastContainer, toast } from "react-toastify";
function AddOns() {
    // const notify = () => toast("Wow so easy!");
    return (
        <>
            <Confetti
                numberOfPieces={2000}
                // gravity={20}
            />
            {/* <div className="addons-container">
                <DNA
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperClass="dna-wrapper"
                />
                <h2>Loading, please wait...</h2>
            </div> */}
            {/* <h1>
          <CountUp
            end={100}
            duration={5}
          />
          </h1> */}
            {/* <div className="image">
                <Tilty>
                    <img src={Image} />
                </Tilty>
            </div> */}
            {/* <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer />
            </div> */}

        </>
    )
}
export default AddOns;


