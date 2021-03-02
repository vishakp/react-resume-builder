import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEducation } from '../store/actions/ProfileActions';


const EducationForm = ({index, values}) => {
    const dispatch = useDispatch();
    const education = useSelector(state => state.profile.education);
    const handleChange = (e) => {
        e.preventDefault();
        let data = {
            ...education[index],
            [e.target.name]: [e.target.value]
        };
        let updatedEducation = [...education];
        updatedEducation[index] = data;
        dispatch(setEducation(updatedEducation));
    }

    return (
        <div>
             <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="school" className="form-control" defaultValue={values.school || ""} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year*</label>
                            <input type="text" name="year" className="form-control" defaultValue={values.year || ""} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification*</label>
                            <input type="text" name="qualification" className="form-control" defaultValue={values.qualification || ""} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="desc" className="form-control" defaultValue={values.description || ""} onChange={handleChange} required />
                        </div>
                    </div>
        </div>
    )
}

export default EducationForm
