import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
const Container = styled.div`
    
`
const Wrapper = styled.div`
padding:1rem;

`
const Title = styled.h2`
    margin-bottom:0.9rem;
`
const Filters = styled.div`
    display: flex;
    justify-content: space-between;
`
const FilterItem = styled.div`
    display: flex;
    align-items:center;
    ${mobile({flexDirection:"column"})};
`
const FilterText = styled.h4`
    margin-right:1rem;
    ${mobile({marginBottom:"1rem"})};
`
const Select = styled.select`
    margin-right:1rem;
    padding:0.4rem 0.6rem;
    border:2px solid black;
    border-radius:0.3rem;
    ${mobile({
    display:"flex",
    flexDirection:"column",
    marginBottom:"10px",
    })};
`
const Option = styled.option`
    
`
const ProductList = () => {
    const location=useLocation();
    const category=(location.pathname.split("/")[2]);
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilter=(e)=>{
        const value=e.target.value;
        setFilter({
            ...filter,
            [e.target.name]:value,
        })
    }
    return (
        <Container>
            <Announcements />
            <Navbar />
            <Wrapper>
                <Title> Dresses </Title>
                <Filters>
                    <FilterItem>
                        <FilterText>
                            Filter Products:
                        </FilterText>
                        <Select name='color' onChange={handleFilter}>
                            <Option disabled selected >
                                Color 
                            </Option>
                            <Option>white</Option>
                            <Option>black</Option>
                            <Option>red</Option>
                            <Option>blue</Option>
                            <Option>yellow</Option>
                            <Option>green</Option>
                            <Option>gray</Option>
                        </Select>
                        <Select name='size' onChange={handleFilter}>
                            <Option disabled selected >
                                Size
                            </Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </FilterItem>
                    <FilterItem>
                        <FilterText>
                            Sort Products:
                        </FilterText>
                            <Select onChange={(e)=>setSort(e.target.value)}>
                                <Option value="newest">Newest</Option>
                                <Option value="asc">Price (asc)</Option>
                                <Option value="desc">Price (desc)</Option>
                            </Select>
                    </FilterItem>
                </Filters>
            </Wrapper>
            <Products category={category} filter={filter} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
