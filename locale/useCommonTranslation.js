import React from "react";
import { useIntl } from "react-intl";

function useCommonTranslation() {
    const intl = useIntl();
    const menu_right = intl.formatMessage({ id: "page.layout.menu_right" });
    const menu_market = intl.formatMessage({ id: "page.layout.menu_market" });
    const menu_about = intl.formatMessage({ id: "page.layout.menu_about" });
    const menu_guide = intl.formatMessage({ id: "page.layout.menu_guide" });
    const menu_raceMarket = intl.formatMessage({
      id: "page.layout.menu_raceMarket",
    });
    const menu_competition = intl.formatMessage({
      id: "page.layout.menu_competition",
    });
    const menu_login = intl.formatMessage({ id: "page.layout.menu_login" });
    const menuTexts = {
        menu_right,
        menu_market,
        menu_about,
        menu_guide,
        menu_competition,
        menu_login,
        menu_raceMarket,
      };
    return {

    }
}

export default useCommonTranslation;