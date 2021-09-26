import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './employ.css'

const Employ = (props) => {
    // distructuring data
    const { Name, Designation, Age, Country, Img, Salary } = props.employ;
    return (
        // make card using bootstrap
        <div className="col mb-5">
            <div className="card h-100 bg-card">
                <img src={Img} className="card-img-top w-100" height='200px' alt="..."></img>
                <div className="card-body">
                    <p className="card-title"><span className="fw-bold">Name: </span> {Name}</p>
                    <p><span className="fw-bold fs-6">Designation: </span> {Designation}</p>
                    <p><span className="fw-bold fs-6">Age: </span> {Age}</p>
                    <p><span className="fw-bold fs-6">Country: </span> {Country}</p>
                    <p><span className="fw-bold fs-6">Salary: </span> ${Salary}</p>
                </div>
                <div>
                    {/* adding button click litener */}
                    <button onClick={() => props.addHandler(props.employ)} className="mb-3 btn btn-danger">Add to Team {<FontAwesomeIcon icon={faUserPlus} />}</button>
                </div>
            </div>
        </div>
    );
};

export default Employ;








