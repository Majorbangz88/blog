
import { Route, Routes } from 'react-router-dom';
import {Layout} from "./layout";
import {Pages} from "./pages";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Pages />} />
            </Route>
        </Routes>

    )
}


export default App;
