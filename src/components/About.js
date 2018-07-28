import React from "react";

export class About extends React.Component {
    state = {
        imageSrc: "",
    }
    
    async componentDidMount () {
        const response = await fetch("https://cataas.com/cat/gif/says/About?filter=sepia&color=blue&size=40&type=or")
        //code below this will wait for the response for fetch because of "async" and "await"
        
        const imageBlob = await response.blob();
        const imageSrc = window.URL.createObjectURL(imageBlob);

        const updatedState = {
            imageSrc:imageSrc,
        }

        this.setState(updatedState)
    }

    render () {
        if (!this.state.imageSrc) {
            return <p>Loading</p>
        }
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.state.imageSrc} alt="this is a random cat gif" />
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
        )
    }
}