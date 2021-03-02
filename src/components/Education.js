import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EducationForm from './EducationForm';
import { setEducation } from '../store/actions/ProfileActions';

const Education = ({ prevStep, nextStep, status }) => {
    const education = useSelector(state => state.profile.education);
    const dispatch = useDispatch();

    const handleChange = (edu, index) => {
        let eduList = [...education];
        eduList[index] = edu;
        dispatch(setEducation(eduList));
    }

    const handleDeletion = () => {
        let eduList = [...education];
        eduList.pop();
        dispatch(setEducation(eduList));
    }

    const handleAddition = () => {
        let eduList = [...education, {
            school: '',
            year: '',
            qualification: '',
            desc: '',
        }];
        dispatch(setEducation(eduList));
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

                <h3 className="card-title">Education Info</h3>
                <hr />
            </div>
            <form onSubmit={handleSubmit}>
                {
                    education.map((edu, index) => <EducationForm values={edu} index={index} key={index} handleChange={handleChange} />)
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

export default Education
