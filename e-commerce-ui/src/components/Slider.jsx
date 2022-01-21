import { sliderItems } from '../data'
import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import styled from "styled-components"
import { useState } from 'react'
import { mobile } from '../responsive'

const Container = styled.div`
    /* width:100vw; */
    height:100vh;
    display: flex;
    position:relative;
    overflow:hidden;
    ${mobile({display:"none"})};
`

const Arrow = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props => props.direction === "left" && " 10px"};
    right:${props => props.direction === "right" && " 15px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:111;
`
const Wrapper = styled.div`
    height:100%; 
    display:flex;  
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw); 
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    /* justify-content:center; */
    align-items:center;
    background-color:#${props=>props.bg};
`
const ImageContainer = styled.div`
    height:100%;
    flex:1;
`
const Image = styled.img`
    height:80%;
`
const InfoContainer = styled.div`
    padding:2rem;
`
const Title = styled.h1`
    font-size:3rem;
`
const Desc = styled.p`
    font-size:1.2rem;
    letter-spacing:3px;
    font-weight:500;
    margin:1rem 0;
`
const Button = styled.button`
    background:transparent;
    border:2px solid black;
    border-radius:5px;
    padding:10px 14px;
    cursor:pointer;
    font-weight:500;
    transition:all 0.4s ease;
    &:hover{
        background:lightgray;
        color:white;
        transform:scale(1.1);
    }
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const onClickHandler=(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex>0? slideIndex-1:2)
        }
        else{
            setSlideIndex(slideIndex<2 ? slideIndex+1:0)
        }
    }
    return (
        <Container>

            <Arrow direction="left" onClick={()=>onClickHandler("left")}>
                <ArrowLeft style={{fontSize:"3rem"}}/>
            </Arrow>
            <Arrow direction="right" onClick={()=>onClickHandler("right")}>
                <ArrowRight style={{fontSize:"3rem"}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(
                    item => {
                        return (
                            <Slide key={item.id} bg={item.bg}>
                                <ImageContainer>
                                    <Image src={item.img} alt='Deals'/>
                                </ImageContainer>
                                <InfoContainer>
                                    <Title>{item.title}</Title>
                                    <Desc>{item.desc}</Desc>
                                    <Button>Shop Now!</Button>
                                </InfoContainer>
                            </Slide>
                        )
                    }
                )}

            </Wrapper>
        </Container>
    )
}

export default Slider
