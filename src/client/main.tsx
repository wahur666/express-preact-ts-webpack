import "../../node_modules/bootstrap/dist/js/bootstrap";
import "./global.scss";
import { render } from "preact";
import { App } from "./app/app";


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}


render(<App />, document.getElementById("root")!);
