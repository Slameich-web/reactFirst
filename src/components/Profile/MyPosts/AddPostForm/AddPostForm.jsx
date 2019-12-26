import React from 'react';
import s from '../MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
                </div>
                <div>
                <button>Send222</button>
                </div>
            </form>
    )
}

export default reduxForm({form: 'profile-add-post'})(AddPostForm)