import { Configuration } from "./cfg";
import { MyInfo } from "./myInfo";

// Create a global variable for the configuration
window["DemoRibbon"] = { Configuration };

// Wait for the page to be loaded
window.addEventListener("load", () => {
    // Create an instance of the ribbon
    MyInfo();
});