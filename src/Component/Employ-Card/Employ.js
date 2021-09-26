import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './employ.css'

const Employ = (props) => {
    const { Name, Designation, Age, Country, Img, Salary } = props.employ;
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img src={Img} className="card-img-top w-100" height='200px' alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Name: {Name}</h5>
                    <h5>Designation: {Designation}</h5>
                    <h5>Age: {Age}</h5>
                    <h5>Country: {Country}</h5>
                    <h5>Salary: ${Salary}</h5>
                </div>
                <div>
                    <button onClick={() => props.addHandler(props.employ)} className="mb-3">Add to Team {<FontAwesomeIcon icon={faUserPlus} />}</button>
                </div>
            </div>
        </div>
    );
};

export default Employ;








