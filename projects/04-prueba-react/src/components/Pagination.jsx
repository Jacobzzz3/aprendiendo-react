import React from "react";

const Pagination = ({ prev, next, onPrev, onNext }) => {
    const handlePrev = () => {
        onPrev()
    }

    const handleNext = () => {
        onNext()
    }

    return (
        <nav className="">
            <ul className="">
                {prev ?
                    <li className="">
                        <button className="" onClick={handlePrev}>Prev</button>
                    </li>
                    : null}
                {next ?
                    <li className="">
                        <button className="" onClick={handleNext}>Next</button>
                    </li>
                    : null}
            </ul>
        </nav>
    )
}

export default Pagination