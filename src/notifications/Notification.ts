/**
 * Shows notifcations and hints to the user
 */

import { getGame } from "../scripts/getGame";

declare global {
  interface Window {
    vtta: VTTA;
  }
}

const MARGIN = 10;

interface NotificationsOptionsHide {
  selector: JQuery;
  event: string;
}

interface NotificationOptions {
  width?: number;
  height?: number;
  element?: JQuery;
  align?: string;
  buttons?: string[];
  hide?: NotificationsOptionsHide;
}

interface Notification {
  hide?: () => void;
  show?: (message: string, timeout?: number) => void;
}

interface Hint {
  hide?: () => void;
  show?: (message: string, options?: NotificationOptions) => void;
}

interface VTTA {
  notification: Notification;
}

const registerNotifications = (): void => {
  // register the notification global object

  if ($("#tips-notifications").length === 0) {
    $("body").append(`<div id="tips-notifications" class="app"></div>`);
  }

  window.vtta =
    <VTTA>window.vtta ||
    <VTTA>{
      notification: {
        clear: () => {
          $("#tips-notifications div").fadeOut(200, () => {
            $("#tips-notifications").empty();
          });
        },
        show: (message: string, timeout: number = 4000) => {

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
