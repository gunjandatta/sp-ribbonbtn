import { Helper } from "gd-sprest";

/**
 * Configuration
 */
export const Configuration = Helper.SPConfig({
    // Custom Action Configuration
    CustomActionCfg: {
        // Target the Web
        Web: [
            {
                Location: "ScriptLink",
                Name: "MyInfo",
                Title: "My Info",
                Description: "Displays a 'My Info' link in the top ribbon row.",
                ScriptSrc: "~site/siteassets/demoRibbon.js"
            }
        ]
    }
});