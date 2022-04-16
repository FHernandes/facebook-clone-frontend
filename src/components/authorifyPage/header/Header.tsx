import Banner from "./banner/Banner";
import PrimaryHeader from "./primaryHeader/PrimaryHeader";
import SecondaryHeader from "./secondaryHeader/SecondaryHeader";
import { Container } from "./style";

const Header = () => {
    return (
        <Container>
            <Banner />
            <PrimaryHeader />
            <SecondaryHeader />
        </Container>
    )
}

export default Header;
