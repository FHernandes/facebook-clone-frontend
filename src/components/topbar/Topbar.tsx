import { Search, Person, Chat, Notifications, Home, LiveTv, GroupWork, Casino, Add } from "@mui/icons-material";
import { useContext } from "react";
import { DefaultContext } from "../../context/DefaultContext";
import { Container } from "./style";

const Topbar = () => {
    const { username, profilePicture } = useContext(DefaultContext);

    return (
        <Container>
            <div className="topbarLeft">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png" alt="facebook_logo" />
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search Facebook" className="searchInput" />
                </div>
            </div>
            <div className="topbarCenter">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Home />
                    </div>
                    <div className="topbarIconItem">
                        <LiveTv />
                    </div>
                    <div className="topbarIconItem">
                        <GroupWork />
                    </div>
                    <div className="topbarIconItem">
                        <Casino />
                    </div>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarProfile">
                    <img src={profilePicture} alt="profile" className="topbarImage" />

                    <span className="topbarUser">{username}</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Add />
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Topbar;
