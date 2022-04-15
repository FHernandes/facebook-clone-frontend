import { Circle, Info, Star, ZoomOutMap } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Container } from "./style";

const Header = () => {
    return (
        <Container>
            <div className="container">
                <img src="https://scontent.fcgh3-1.fna.fbcdn.net/v/t39.30808-6/244746241_1271633180023431_5572490481743262164_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGIe27-MAL2Pg05q_Ev_ZXFdMB4PoM4eMl0wHg-gzh4yYnX-xKcyqimqLpIVsGb27E&_nc_ohc=YuGb5zTI1-QAX-V0Rzk&_nc_oc=AQnEEft5QJlXoViTUF7W_P-Shdrz55ITuiFzvJrMEB5692rUtxaLb1R87G1Ka62w6Toms8nRoBxONvJ9-53Bffgj&_nc_ht=scontent.fcgh3-1.fna&oh=00_AT-iI1TIqJQ5Ax9DOXokbeJ1aZEa_ydaHJeQ5Q9P0YDEoQ&oe=625F2F3A" alt="banner" className="banner" />

                <div className="aboutPage">
                    <div className="primaryHeader">
                        <div className="profile">
                            <img src="https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/56842738_596875914165831_4697191700529938432_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHyf4gjOV_8ZOq26PL-VB_X41N1gvKZbKTjU3WC8plspDsBQr98we5SMzguoh7TaK0&_nc_ohc=aAsz7P-zOysAX_iJf6W&_nc_ht=scontent.fcgh3-1.fna&oh=00_AT8XA21POWmRXzOOigcsUIf3xOuQmPHxZ92S6UA8skuBEg&oe=627D7D31" alt="profile_page" />
                            <div className="titlePage">
                                <div className="title">Authorify </div>
                                <div className="subtitle">
                                    @Authorify <Circle /> <Star className="star" /> 4.9 (1,304 reviews) <Circle /> Advertising/Marketing
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
                    <div className="secondaryHeader">
                        teste
                    </div>

                </div>
            </div>

        </Container>
    )
}

export default Header;
