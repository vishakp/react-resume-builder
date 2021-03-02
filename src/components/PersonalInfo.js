import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInfo } from '../store/actions/ProfileActions';
import Skills from './Skills';


const PersonalInfo = ({nextStep, status}) => {
    const dispatch = useDispatch();
    const personalInfo = useSelector(state => state.profile.personalInfo);

    const handleChange = (e) => {
        dispatch(setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    };
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Personal Info</h3>
                    <hr />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Name*</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange} defaultValue={status === 1 ? '' : personalInfo.name} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Email*</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange}  defaultValue={status === 1 ? '' : personalInfo.email} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Mobile*</label>
                            <input type="text" name="phone" className="form-control" onChange={handleChange} defaultValue={status === 1 ? '' : personalInfo.phone} required />
                        </div>
                        <div className="col-lg-12">&nbsp;</div>
                        <div className="col-lg-12 text-left">
                            <label>Job Title*</label>
                            <input type="text" name="title" className="form-control" onChange={handleChange} defaultValue={status === 1 ? '' : personalInfo.title} required />
                        </div>
                    </div>
                    
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Skills*</label>
                            <Skills handleChange={handleChange} values={status === 1 ? []: personalInfo.skills}/>
                        </div>
                    </div>
                    <br />
                    <div className="container text-center"><button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button></div>
                    <br/>
                </form>
            
            </div>
        )
    }


export default PersonalInfo

