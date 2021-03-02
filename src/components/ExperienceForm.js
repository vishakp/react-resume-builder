import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExperience } from '../store/actions/ProfileActions';

const ExperienceForm = ({ index, values}) => {
    const dispatch = useDispatch();
    const experience = useSelector(state => state.profile.experience);
    const handleChange = (e) => {
        e.preventDefault();
        let data = {
            ...experience[index],
            [e.target.name]: [e.target.value]
        };
        let updatedExperience = [...experience];
        updatedExperience[index] = data;
        dispatch(setExperience(updatedExperience));
    }
    return (
        <div>
            <div className="row col-lg-10 mx-auto">
                <div className="col-lg-4 text-left">
                    <label>Institute/Organisation*</label>
                    <input type="text" name="organisation" className="form-control" defaultValue={values.organisation || ""} onChange={handleChange} required />
                </div>
                <div className="col-lg-4 text-left">
                    <label>Position*</label>
                    <input type="text" name="position" className="form-control" defaultValue={values.position || ""} onChange={handleChange} required />
                </div>
                <div className="col-lg-4 text-left">
                    <label>Duration*</label>
                    <input type="text" name="duration" className="form-control" defaultValue={values.duration || ""} onChange={handleChange} required />
                </div>
            </div>
            <div className="row col-lg-10 mx-auto">
                <div className="col-lg-12 text-left">
                    <label>Description*</label>
                    <input type="text" name="description" className="form-control" defaultValue={values.description || ""} onChange={handleChange} required />
                </div>
            </div>
        </div>
    )
}

export default ExperienceForm
