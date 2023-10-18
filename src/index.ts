import App from "./Components/App/App.js";

const body = document.querySelector("body")!;

const container = new App(body, "div", "container");

container.render();
