import { Container } from "react-bootstrap"

export const ItemListContainer = ({greeting}) => {
    return (
        <Container>
            <h1>{greeting}</h1>
        </Container>
    )
}