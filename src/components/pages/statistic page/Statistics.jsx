import React from "react";
import { Link } from "react-router-dom";

function Statistics(props) {
    return (
        <div className="container">
            <div className="main-panel h1">
                <h1>Congratulations!</h1>
                <p>
                    You got {props.location.state.points} out of 10 points in
                    quiz. Would you like to try again?
                </p>
                <button className="btn">
                    <Link to="/quiz">Try again</Link>
                </button>
            </div>
        </div>
    );
}

export default Statistics;