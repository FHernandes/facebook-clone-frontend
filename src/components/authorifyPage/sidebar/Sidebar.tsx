import { AutoAwesomeMotion, Folder, Info, Language, LocationOn, Message, Phone, ThumbUp } from "@mui/icons-material";
import CardItem from "../../cardItem/CardItem";
import { Container } from "./style";

const Sidebar = () => {
    return (
        <Container>
            <div className="card">
                <div className="title">About</div>
                <CardItem
                    text={"We help experts become an authority by becoming an author"}
                    icon={<Info />}
                />
                <CardItem
                    text={"9,998 people like this"}
                    icon={<ThumbUp />}
                />
                <CardItem
                    text={"9,297 people follow this"}
                    icon={<AutoAwesomeMotion />}
                />
                <CardItem
                    text={"1 person checked in here"}
                    icon={<LocationOn />}
                />
                <CardItem
                    text={"http://authorify.com/"}
                    icon={<Language />}
                />
                <CardItem
                    text={"+1 904-695-9933"}
                    icon={<Phone />}
                />
                <CardItem
                    text={"Send message"}
                    icon={<Message />}
                />
                <CardItem
                    text={"Advertising/Marketing"}
                    icon={<Folder />}
                />
                <CardItem
                    text={"You’re not average so why look it? Become an authority by becoming an author!"}
                    icon={<Info />}
                />
            </div>
            <div className="card">
                <div className="title">Suggest Edits</div>
                <div className="description">
                    Does this place have hours of operation?
                </div>
                <div className="buttonContainer">
                    <div className="button">Yes</div>
                    <div className="button">Unsure</div>
                    <div className="button">No</div>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar;
