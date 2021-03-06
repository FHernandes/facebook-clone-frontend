import { LocationOn, PersonAddAlt1, PhotoLibrary } from "@mui/icons-material";
import { useContext, useState } from "react";
import { DefaultContext } from "../../context/DefaultContext";
import ModalPost from "../post/modal/ModalPost";
import { Container } from "./style";

const Share = () => {
    const [modal, setModal] = useState<boolean>(false)

    const { profilePicture } = useContext(DefaultContext);
    return (
        <>
            <Container>
                <div className="share">
                    <div className="createPost">
                        <img src={profilePicture} alt="profile" className="profile" />
                        <div className="buttonCreatePost" onClick={() => setModal(true)}>
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
            {modal &&
                <ModalPost setModal={setModal} />
            }
        </>
    )
}

export default Share;
