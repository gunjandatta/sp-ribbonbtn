import { Helper, Web } from "gd-sprest";

/**
 * My Info
 */
export const MyInfo = () => {
    // Create the ribbon button
    Helper.RibbonLink({
        id: "myInfo",
        title: "My Info",
        onClick: () => {
            // Display a loading dialog
            Helper.SP.ModalDialog.showWaitScreenWithNoClose("Loading Your Info...");

            // Get the current user's information
            Web().CurrentUser().execute(userInfo => {
                // Create the element to contain the user information
                let elUserInfo = document.createElement("div");
                elUserInfo.innerHTML = [
                    '<h1>' + userInfo.Title + '</h1>',
                    '<h3>Email Address: ' + userInfo.Email + '</h3>',
                    '<h3>Site Admin: ' + (userInfo.IsSiteAdmin ? "Yes" : "No") + '</h3>'
                ].join('\n');

                // Close the loading dialog
                Helper.SP.ModalDialog.commonModalDialogClose();

                // Display the user's information in a modal dialog
                Helper.SP.ModalDialog.showModalDialog({
                    title: "My Information",
                    html: elUserInfo
                });
            });
        }
    });
}