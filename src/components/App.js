import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import UserContext from "../contexts/UserContext";
import DaysContext from "../contexts/DaysContext"

import ScreenLogin from "./ScreenLogin";
import ScreenHabits from "./ScreenHabits/ScreenHabits";
import ScreenHistoric from "./ScreenHistoric";
import ScreenRegister from "./ScreenRegister";
import ScreenToday from "./ScreenToday";
export default function App() {
    const [user, setUser] = useState("")
    const [day, setDay] = useState("")
    return (
        <UserContext.Provider value={{user, setUser}}>
            <DaysContext.Provider value={{day, setDay}}>
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
            </DaysContext.Provider>
        </UserContext.Provider>
    )
}