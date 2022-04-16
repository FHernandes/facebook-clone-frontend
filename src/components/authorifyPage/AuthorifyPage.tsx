import Feed from "./feed/Feed";
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
                    <Feed />
                </div>

            </div>
        </Container>
    )
}

export default AuthorifyPage;
