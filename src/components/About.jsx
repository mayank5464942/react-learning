import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent component did mount");
    }

render(){
    console.log("parent render");
    return (
        <div className="about">
            <h1>About us</h1>
            <UserClass name="first (class)" location="Gwalior" />
        </div>
    );
}
};

export default About;