import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Container } from "./style";

const AuthorifyPage = () => {
    return (
        <Container>
            <Header />
            <div className="bodyContainer">
                <div className="centerDiv">
                    <Sidebar />
                    <div>feed</div>
                </div>

            </div>
        </Container>
    )
}

export default AuthorifyPage;
