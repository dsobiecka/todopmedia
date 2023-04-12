import React from "react";
import {useTranslation} from "react-i18next";

const Home = ({t}: { t: any }) => {
    const {t: translate} = useTranslation();

    return (
        <div>
            <div>
                <h2 className="mt-5 pt-5 text-center">
                    {t('translations:hello')}
                </h2>
            </div>
        </div>
    )
};

export default Home;
