import {
    PERSONAL_INFO,
    EXPERIENCE,
    EDUCATION,
    SKILLS
} from '../types';
const initialState = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
        title: '',
        skills: [],
    },
    experience: [
        {
            organisation: '',
            position: '',
            description: '',
            duration: ''
        }
    ],
    education: [
        {
            school: '',
            year: '',
            qualification: '',
            description: '',
        }
    ]
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSONAL_INFO: {
            return {
                ...state,
                personalInfo: {...action.data}
            };
        }
        case EXPERIENCE: {
            return {
                ...state,
                experience:[...action.data]
            };
        }

        case EDUCATION: {
            return {
                ...state,
                education:[...action.data]
            };
        }

        case SKILLS: {
            return {
                ...state,
                skills:[...action.data]
            };
        }

        default: {
            return state;
        }

    }
};

export default ProfileReducer;