import { ArrowDropDown, Message, MoreHoriz, Search, ThumbUp } from "@mui/icons-material";
import { useState } from "react";
import { Container } from "./style";

const SecondaryHeader = () => {
    return (
        <Container>
            <div className="container">
                <div className="pageRedirects">
                    <div className="pageRedirect active">Home</div>
                    <div className="pageRedirect">Events</div>
                    <div className="pageRedirect">Video</div>
                    <div className="pageRedirect">Photo</div>
                    <div className="pageDropdown">More <ArrowDropDown /></div>
                </div>
                <div>
                    <div className="rightButtons">
                        <div className="likeButton"><ThumbUp /> Like</div>
                        <div className="button">
                            <Message />
                            <span>Message</span> </div>
                        <div className="button"><Search /></div>
                        <div className="button"><MoreHoriz /></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SecondaryHeader;
