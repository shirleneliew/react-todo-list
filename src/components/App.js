//tell js file to use react
import React from "react";

import { Header } from "./Header"
import { About } from "./About"
import { Todos } from "./Todos"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <About title="passing through props"/>
                <Todos />
            </div>
        )
    }
}

//export the component called "App"
export default App