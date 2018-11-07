import React from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                name:"Gudetama kawaii",
                email : "Gudetama@example.com",
                picture: "https://1.bp.blogspot.com/-Se8NVFMjmKY/WDvFaoYdFpI/AAAAAAAACMQ/F203J-XH5uszx3oLOlI_kyTugYG_sJzRwCLcB/s400/superthumb.png"
            }
            this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook(response) {
        console.log(response)
        this.setState ({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        var data = ({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        axios.post("http://localhost:3000/login",data).then((res) => {
         console.log(res)
         
     })

    }

    render() {
        return (
            <div className="App">
                <FacebookLogin
                appId = '167038477583782'
                fields = "name,email,picture"
                callback = {this.responseFacebook}
                />
                <div>
                    <figure>
                        <img src = {this.state.picture} alt = "Not found"/>
                    </figure>

                    <div>
                        <p>{this.state.name}</p>
                        <p>{this.state.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register