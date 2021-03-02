import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControl/Control";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <Field validate={[required]} name="LOGIN" component={Input} id="LOGIN" type="text" placeholder={'login'}/>
            </div>
            <div className="form-group">
                <Field validate={[required]} name="PASSWORD" component={Input} id="PASSWORD" type="password" placeholder={'password'}/>
            </div>
            <div className="form-check mb-2">
                <Field name="REMEMBER" component="input" type="checkbox" id="REMEMBER"  className="form-check-input" />
                <label className="form-check-label" htmlFor="REMEMBER">Check me out</label>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginPage = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return(
        <div>
            <div className="h1">Login</div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}
export default LoginPage;