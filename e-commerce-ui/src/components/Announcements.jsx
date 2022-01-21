import styled from "styled-components"

const Container=styled.div`
    padding:0.8rem;
    background-color:teal;
    color:white;
    text-align:center;
`
const Announcements = () => {
    return (
        <Container>
            Super Deal! Free Shipping on order over Rs 500
        </Container>
    )
}

export default Announcements
