import classes from "./app.module.scss";
import Logo from "../assets/preact.svg";

export function App() {
    return <div class={classes.frame}>
        <Logo class={classes.logo} />
        <h1>Express - Preact template</h1>
        <h2>Used technologies</h2>
        <ul>
            <li>Express</li>
            <li>Preact</li>
            <li>Typescript</li>
            <li>Sass</li>
            <li>Bootstrap 5</li>
            <li>Webpack 5</li>
        </ul>
        <a class="btn btn-primary" href="https://github.com/wahur666/express-preact-ts-webpack" target="_blank">Open GitHub page</a>
    </div>
  }