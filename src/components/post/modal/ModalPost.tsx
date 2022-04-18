import { Public } from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { DefaultContext } from "../../../context/DefaultContext";
import api, { IPost } from "../../../core/api";
import { Overlay } from "../../Overlay/Overlay";
import { Container } from "./style";

interface IModalPost {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPost = ({ setModal }: IModalPost) => {
    const [description, setDescription] = useState<any>(null);
    const [image, setImage] = useState<any>(null);
    const [newPost, setNewPost] = useState<any>(null);

    const { userId, username, profilePicture, posts } = useContext(DefaultContext);

    const handleClick = () => {
        setModal(false);
    }

    const handleFileChange = (event: any) => {
        setImage({ selectedFile: event.target.files[0] });
    }

    const handleAddPost = async () => {
        try {
            if (description === "") { return } else {
                const post = await api.post<any, IPost>("/posts", {
                    userId: userId,
                    desc: description,
                    img: image.selectedFile.name,
                })

                if (image) {
                    const formData = new FormData();

                    formData.append("file", image.selectedFile);
                    const img = await api.post<any, any>(
                        "/posts/upload",
                        formData,
                    )
                }
                setNewPost([post.data, ...posts])
                setModal(false);
            };
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Overlay onClick={handleClick} />
            <Container>
                <div className="title">Create post</div>
                <div className="profile">
                    <img src={profilePicture} alt="logo" />
                    <div>
                        <div className="username">{username}</div>
                        <div className="privacy"><Public />Public</div>
                    </div>
                </div>
                <div className="description">
                    <input
                        placeholder="Write sonething to Authorify..."
                        type="text"
                        name="text"
                        className="inputDescription"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div className="addToPost">
                    Add a image to your post
                    <br />
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="addPost" onClick={handleAddPost}>Post</div>
            </Container>
        </>
    )
}

export default ModalPost;
