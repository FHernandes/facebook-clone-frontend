import { ChatBubbleOutline, MoreHoriz, Share, ThumbUp } from "@mui/icons-material";
import { Container } from "./style";

const Post = () => {
    return (
        <>
            <Container>
                <div className="post">
                    <div className="postHeader">
                        <div className="profile">
                            <img src="https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/56842738_596875914165831_4697191700529938432_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHyf4gjOV_8ZOq26PL-VB_X41N1gvKZbKTjU3WC8plspDsBQr98we5SMzguoh7TaK0&_nc_ohc=aAsz7P-zOysAX_iJf6W&_nc_ht=scontent.fcgh3-1.fna&oh=00_AT8XA21POWmRXzOOigcsUIf3xOuQmPHxZ92S6UA8skuBEg&oe=627D7D31" alt="logo" />
                            <div>
                                <div className="title">Authorify</div>
                                <div className="date">May 4, 2021</div>
                            </div>
                        </div>
                        <div className="more">
                            <MoreHoriz />
                        </div>
                    </div>
                    <div className="description">
                        uhsaidhasiudh  iaushdiuash di saiudh uias hdiusha uidhas ihddiuashdiusah dasuh
                    </div>
                    <div className="imagePost">
                        <img src="https://scontent.fcgh51-1.fna.fbcdn.net/v/t39.30808-6/257115150_1295749217611827_1134001219959399899_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeH1ucMcxehcXwx2CkJjKgJ1rZYS7KejM7ytlhLsp6MzvJeutUE862NvgnU0DhBuxOs&_nc_ohc=OwMP6v89go0AX_RtdqJ&_nc_ht=scontent.fcgh51-1.fna&oh=00_AT-dY_B2ZI1kPXIWMXKc5lm9nm1hU5NVLJNQrLtti-1GKQ&oe=625F22F4" alt="profile" className="imagePost" />
                    </div>
                    <div className="countReaction">
                        5
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
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE3ok7FvtJqoQ/profile-displayphoto-shrink_200_200/0/1573898810811?e=1652918400&v=beta&t=uzp863MeYZUvcoD74_qXwnNgR-qww3mQuSzLbdzRCN8" alt="user" />
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
