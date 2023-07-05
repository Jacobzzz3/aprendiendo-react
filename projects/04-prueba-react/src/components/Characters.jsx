import React from "react";

const Characters = ({ characters = [] }) => {
    return (
        <div className="">
            {characters.map((item, index) => (
                <div key={index} className="">
                    <div className="" style={{ minWidth: "200px" }}>
                        <img src={item.image} alt="" />
                        <div className="">
                            <h5 className="">{item.name}</h5>
                            <hr />
                            <p>Location: {item.location.name}</p>
                            <p>Specie: {item.species}</p>

                        </div>
                    </div>
                </div>

            ))
            }
        </div >
    )
}

export default Characters;