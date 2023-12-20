import { Fragment, JSX } from "react";
import MainScreen from "../../components/landing/main/main";
import InfoAboutUs from "../../components/landing/infoAboutUs/InfoAboutUs";
import InfoAdvantage from "../../components/landing/infoAdvantage/infoAdvantage";
import InfoPossibilities from "../../components/landing/infoPossibilities/infoPossibilities";
import NewsAboutUs from "../../components/landing/newsAboutUs/newsAboutUs";
import {Footer} from "../../components/footer/footer";
import { InfoFootnote } from "../../components/footnote/infoFootnote";

export function Landing(): JSX.Element {
    return (
        <Fragment>
            <MainScreen />
            <InfoAboutUs />
            <InfoAdvantage />
            <InfoPossibilities />
            <NewsAboutUs />
            <Footer />
            <InfoFootnote />
        </Fragment>
    )
}