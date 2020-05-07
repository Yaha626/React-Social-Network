import React from "react";
import {createField, Input, Textarea} from "../../Сommon/components/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit()}>
        <div>
            <button>Save</button>
        </div>
        }
        <div>
            <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}

        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
            {createField('About me', 'aboutMe', [], Textarea)}

        </div>
        <div>
            {/*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm