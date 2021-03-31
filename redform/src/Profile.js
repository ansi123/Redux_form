import React,{useState} from 'react'
import {connect} from 'react-redux';
import './App.css';

const Profile = (props) => {
    return (
        <div>
            <h1>Profile</h1>
            {props.formData.firstName}
            {props.formData.lastName}

        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        formData:state.form.myForm.values
    }
}
export default connect(mapStateToProps)(Profile)
