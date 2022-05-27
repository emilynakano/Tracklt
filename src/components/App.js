import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import UserContext from "../contexts/UserContext";

import ScreenLogin from "./ScreenLogin";
import ScreenHabits from "./ScreenHabits/ScreenHabits";
import ScreenHistoric from "./ScreenHistoric";
import ScreenRegister from "./ScreenRegister";
import ScreenToday from "./ScreenToday";
export default function App() {
    const [user, setUser] = useState("")
    return (
        <UserContext.Provider value={{user, setUser}}>
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
    
        </UserContext.Provider>
    )
}