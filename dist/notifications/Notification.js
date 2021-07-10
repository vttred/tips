/**
 * Shows notifcations and hints to the user
 */
import { getGame } from "../scripts/getGame.js";
const MARGIN = 10;
const registerNotifications = () => {
    // register the notification global object
    if ($("#tips-notifications").length === 0) {
        $("body").append(`<div id="tips-notifications" class="app"></div>`);
    }
    window.vtta =
        window.vtta ||
            {
                notification: {
                    clear: () => {
                        $("#tips-notifications div").fadeOut(200, () => {
                            $("#tips-notifications").empty();
                        });
                    },
                    show: (message, timeout = 4000) => {
                        let note = $("#tips-notifications").append(message);
                        $(note).hide().fadeIn(200);
                        if (timeout)
                            setTimeout(() => {
                                $(note).fadeOut(200, () => {
                                    $(note).remove();
                                });
                            }, timeout);
                        else
                            $(note).append(`<p style="text-align: center; color: #7e7e7e; margin: 0px;"><small>${getGame().i18n.localize("FOUNDRYTIPS.clicktoclose")}</small>`);
                        $(note).on("click", () => {
                            $(note).fadeOut(200, () => {
                                $(note).remove();
                            });
                        });
                    },
                }
            };
};
export default registerNotifications;

//# sourceMappingURL=Notification.js.map
