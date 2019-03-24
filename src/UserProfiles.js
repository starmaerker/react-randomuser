import React, { Component } from "react";

class UserProfiles extends Component {
    constructor() {
        super();
        this.state = {
            image: "",
        };
        this.getUser = this.getUser.bind(this);        
    }

    componentWillMount() {
        this.getUser();
    }

    getUser() {
        fetch("https://randomuser.me/api/?gender=female")
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Request failed.");
            })
            .then(data => {
                this.setState({
                    image: data.results[0].picture.large,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div>
                <img alt="Profile" src={this.state.image} />
                <button onClick={this.getUser}>Get new user.</button>
            </div>
        )
    }
}

export default UserProfiles;