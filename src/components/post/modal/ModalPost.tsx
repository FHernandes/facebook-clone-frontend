import { Public } from "@mui/icons-material";
import { Overlay } from "../../Overlay/Overlay";
import { Container } from "./style";

interface IModalPost {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPost = ({ setModal }: IModalPost) => {
    const handleClick = () => {
        setModal(false);
    }

    return (
        <>
            <Overlay onClick={handleClick} />
            <Container>
                <div className="title">Create post</div>
                <div className="profile">
                    <img src="https://scontent.fcgh51-1.fna.fbcdn.net/v/t1.6435-9/100649260_10213478851604726_4247054633710649344_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXu8PED4XASjYgsmRlC6F-b8jArDI7uoZvyMCsMju6hqsl5UG48MK8yiA5xgbZOec&_nc_ohc=IO46OL6w2oUAX_zH7Nh&tn=N-cg5vr8f7jLeK3o&_nc_ht=scontent.fcgh51-1.fna&oh=00_AT_8qIQokQiJmaP4QXKBYG5qnLlBFAAaIoNgfJrWn6eLDw&oe=627F7E98" alt="logo" />
                    <div>
                        <div className="username">Fernanda</div>
                        <div className="privacy"><Public />Public</div>
                    </div>
                </div>
                <div className="description">
                    Write sonething to Authorify...
                </div>
                <div className="addToPost">Add to your post</div>
                <div className="addPost">Post</div>
            </Container>
        </>
    )
}

export default ModalPost;
