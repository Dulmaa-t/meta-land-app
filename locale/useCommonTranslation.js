import React from "react";
import { useIntl } from "react-intl";

function useCommonTranslation() {
    const intl = useIntl();
    const menu_right = intl.formatMessage({ id: "page.layout.menu_right" });
    const menu_collections = intl.formatMessage({ id: "page.layout.menu_collections" });
    const menu_about = intl.formatMessage({ id: "page.layout.menu_about" });
    const menu_pages = intl.formatMessage({ id: "page.layout.menu_pages" });
    const menu_contact = intl.formatMessage({
      id: "page.layout.menu_contact",
    });
    const menu_signin = intl.formatMessage({ id: "page.layout.menu_signin" });
    const menuTexts = {
        menu_right,
        menu_collections,
        menu_about,
        menu_pages,
        menu_contact,
        menu_signin,
      };
    return {

    }
}

export default useCommonTranslation;