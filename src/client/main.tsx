import "../../node_modules/bootstrap/dist/js/bootstrap";
import "./global.scss"
import {render} from "preact";


function App() {
    return (
        <h1>Preact works</h1>
    )
}

render(<App/>, document.getElementById("root")!)