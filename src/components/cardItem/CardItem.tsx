import { Container } from "./style";

interface Item {
    text: string,
    icon: any,
}

const CardItem = ({ text, icon }: Item) => {
    return (
        <Container>
            <span className="icon">{icon}</span>
            <span>{text}</span>
        </Container>
    )
}

export default CardItem;
