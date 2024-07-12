import { Route, Routes } from 'react-router-dom';
import {Layout} from "./layout";
import {Pages} from "./pages";
import Login from "./pages/login";
import Register from "./pages/signup";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Pages />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    )
}

export default App;
