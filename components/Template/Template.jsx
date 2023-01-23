import { useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import theme from './theme'

const Template = ({ children }) => {
    return (
        <div theme={theme}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Template;