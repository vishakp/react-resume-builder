import React, { Component } from 'react';
import '../App.css';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Success from './Success';

class UserForm extends Component {

    state = {
        step: 1,
        status: 0
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            step: 4,
            status: status + 1
        });
    }

    render() {
        const { step, status } = this.state;

        switch (step) {
            case 1:
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <PersonalInfo
                                nextStep={this.nextStep} status={status}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 2:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Experience
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                status={status}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 3:
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Education
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.submitted}
                                status={status}
                            />
                        </div>
                        <br />
                    </div>
                );         

            case 4:
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Success />
                        </div>
                        <br />
                    </div>
                ); 

        }
    }
}

export default UserForm;
