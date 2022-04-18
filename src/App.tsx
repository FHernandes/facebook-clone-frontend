import { BrowserRouter as Router } from "react-router-dom";
import { DefaultContextProvider } from "./context/DefaultContext";

import Routes from './routes/Routes';

function App() {
    return (

        <Router>
            <DefaultContextProvider>
                <Routes />
            </DefaultContextProvider>
        </Router>

    );
}

export default App;
