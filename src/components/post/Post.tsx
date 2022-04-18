import { ChatBubbleOutline, MoreHoriz, Share, ThumbUp } from "@mui/icons-material";
import { useContext } from "react";
import { DefaultContext } from "../../context/DefaultContext";
import { Container } from "./style";

interface IPost {
    description: string,
    img: string
}

const Post = ({ description, img }: IPost) => {
    const { ownerUsername, ownerPicture, profilePicture } = useContext(DefaultContext);

    return (
        <>
            <Container>
                <div className="post">
                    <div className="postHeader">
                        <div className="profile">
                            <img src={ownerPicture} alt="logo" />
                            <div>
                                <div className="title">{ownerUsername}</div>
                                <div className="date">May 4, 2021</div>
                            </div>
                        </div>
                        <div className="more">
                            <MoreHoriz />
                        </div>
                    </div>
                    <div className="description">{description}</div>
                    <div className="imagePost">
                        {img.indexOf("https") >= 0 ?
                            <img src={img} alt="imagePost" className="imagePost" />
                            : <img src={`http://localhost:8000/static/${img}`} alt="imagePost" className="imagePost" />}
                    </div>
                    <div className="countReaction" >
                        <span style={{ display: "none" }}>5</span>
                    </div>
                    <div className="reaction">
                        <div className="button">
                            <ThumbUp /> Like</div>
                        <div className="button">
                            <ChatBubbleOutline /> Comment</div>
                        <div className="button">
                            <Share /> Share
                        </div>
                    </div>
                    <div className="comment">
                        <div className="userProfile">
                            <img src={profilePicture} alt="user" />
                        </div>
                        <div className="userComment">
                            Write a comment...
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Post;
