import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setLocal } from "../utils/storage";

function SwitchLanguageBtn() {
    const { locale, locales } = useRouter();
    const router = useRouter();
    const otherLocale = locales?.find((cur) => cur !== locale);
    useEffect(() => {
      setLocal("chosenLang", locale);
    }, [locale]);

    return (
        <div className="flex flex-1 flex-wrap gap-8">
            <Link href={router.asPath} locale="ko">
                <h1
                    className={`font-[500] text-base xl:text-[20px] cursor-pointer w-max py-3 font-noto flex items-center Pretendard_Font text-[#666]`}
                >
                    KR
                </h1>
            </Link>
            <Link href={router.asPath} locale="en">
                <h1
                    className={`font-[500] text-base xl:text-[20px] cursor-pointer w-max py-3 font-noto flex items-center Pretendard_Font text-[#666]`}
                >
                    ENG
                </h1>
            </Link>
        </div>
    )
}

export default SwitchLanguageBtn;