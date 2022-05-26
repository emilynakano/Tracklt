import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import ScreenLogin from "./ScreenLogin";
import ScreenHabits from "./ScreenHabits/ScreenHabits";
import ScreenHistoric from "./ScreenHistoric";
import ScreenRegister from "./ScreenRegister";
import ScreenToday from "./ScreenToday";

export default function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenLogin />} />
                <Route path="/cadastro" element={<ScreenRegister />} />
                <Route path="/habitos" element={<ScreenHabits />} />
                <Route path="/hoje" element={<ScreenToday />} />
                <Route path="/historico" element={<ScreenHistoric />} />
            </Routes>
        </BrowserRouter>
        </Fragment>
    )
}