import {
    PERSONAL_INFO,
    EXPERIENCE,
    EDUCATION,
    SKILLS
} from '../types';

export function setPersonalInfo(personalInfo) {
    return dispatch => {
        dispatch({
            type: PERSONAL_INFO,
            data: personalInfo
        })
    }
}

export function setExperience(experience) {
    return dispatch => {
        dispatch({
            type: EXPERIENCE,
            data: experience
        })
    }
}

export function setEducation(education) {
    return dispatch => {
        dispatch({
            type: EDUCATION,
            data: education
        })
    }
}

export function setSkills(skills) {
    return dispatch => {
        dispatch({
            type: SKILLS,
            data: skills
        })
    }
}
