import React from "react";
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label="email"
                        handleChange={this.handleChange} />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label="password"
                        handleChange={this.handleChange} />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign in with Google </CustomButton>

                </form>

            </div>
        )
    }


}


export default SignIn