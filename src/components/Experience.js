import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceForm from './ExperienceForm';
import { setExperience } from '../store/actions/ProfileActions';

const Experience = ({ prevStep, nextStep, status }) => {
    const experience = useSelector(state => state.profile.experience);
    const dispatch = useDispatch();

    const handleChange = (exp, index) => {
        let expList = [...experience];
        expList[index] = exp;
        dispatch(setExperience(expList));
    }

    const handleDeletion = () => {
        let expList = [...experience];;
        expList.pop();
        dispatch(setExperience(expList));
    }

    const handleAddition = () => {
        let expList = [...experience, {
            organisation: '',
            position: '',
            description: '',
            duration: ''
        }];
        dispatch(setExperience(expList));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep();
    }

    const handlePrevStep = (e) => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="card animated fadeInLeft">
            <div className="card-body">

                <h3 className="card-title">Experience Info</h3>
                <hr />
            </div>
            <form onSubmit={handleSubmit}>
                {
                    experience.map((exp, index) => <ExperienceForm values={exp} index={index} key={index} handleChange={handleChange} />)
                }

                <br />
                <div className="col-lg-12 text-right">
                    <button type="button" className="btn btn-info" onClick={handleDeletion}><i className="fa fa-minus mr-1"></i>Remove</button>
                    &nbsp;
                    <button type="button" className="btn btn-info" onClick={handleAddition}><i className="fa fa-plus mr-1"></i>Add</button>
                </div>
                <br />

                <div className="container text-center">
                    <button type="button" className="btn btn-info" onClick={handlePrevStep}><i className="fas fa-angle-left mr-1"></i>Back</button>
                &nbsp;

                    <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                </div>
                <br />
            </form>
        </div>
    )
}

export default Experience
