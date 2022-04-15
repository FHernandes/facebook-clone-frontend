import { Search, Person, Chat, Notifications, Home, LiveTv, GroupWork, Casino, Add } from "@mui/icons-material";
import { Container } from "./style";

const Topbar = () => {
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
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE3ok7FvtJqoQ/profile-displayphoto-shrink_200_200/0/1573898810811?e=1652918400&v=beta&t=uzp863MeYZUvcoD74_qXwnNgR-qww3mQuSzLbdzRCN8" alt="profile" className="topbarImage" />

                    <span className="topbarUser">Timeline</span>
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
