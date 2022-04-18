import { Circle, Info, Star, ZoomOutMap } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DefaultContext } from "../../../../context/DefaultContext";
import { Container } from "./style";

const PrimaryHeader = () => {
    const { ownerUsername, ownerPicture } = useContext(DefaultContext);
    return (
        <Container>
            <div className="container">
                <div className="aboutPage">
                    <div className="primaryHeader">
                        <div className="profile">
                            <img src={ownerPicture} alt="profile_page" />
                            <div className="titlePage">
                                <div className="title">{ownerUsername} </div>
                                <div className="subtitle">
                                    @{ownerUsername} <Circle /> <Star className="star" /> 4.9 (1,304 reviews) <Circle /> Advertising/Marketing
                                </div>
                            </div>
                        </div>
                        <div className="learnMore">
                            <Button variant="contained"><Info />Learn more</Button>
                            <div className="link">
                                <ZoomOutMap /> authorify.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PrimaryHeader;
