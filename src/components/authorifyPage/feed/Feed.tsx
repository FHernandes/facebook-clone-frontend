import Post from "../../post/Post";
import Share from "../../share/Share";
import { Container } from "./style";

const Feed = () => {
    return (
        <Container>
            <Share />
            <Post />
        </Container>
    )
}

export default Feed;
