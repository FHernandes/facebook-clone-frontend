import { LocationOn, PersonAddAlt1, PhotoLibrary } from "@mui/icons-material";
import { Container } from "./style";

const Share = () => {
    return (
        <Container>
            <div className="share">
                <div className="createPost">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE3ok7FvtJqoQ/profile-displayphoto-shrink_200_200/0/1573898810811?e=1652918400&v=beta&t=uzp863MeYZUvcoD74_qXwnNgR-qww3mQuSzLbdzRCN8" alt="profile" className="profile" />
                    <div className="buttonCreatePost">
                        Create Post
                    </div>
                </div>
                <div className="addMedia">
                    <div className="btn buttonMedia">
                        <PhotoLibrary />Photo/video
                    </div>
                    <div className="btn buttonCheckin">
                        <LocationOn /> Check in
                    </div>
                    <div className="btn buttonTagFriend">
                        <PersonAddAlt1 /> Tag friends
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Share;
