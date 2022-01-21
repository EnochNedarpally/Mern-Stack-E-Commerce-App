import styled from 'styled-components'
import { categories } from '../data'
import { mobile } from '../responsive'

import CategoryItem from './CategoryItem'

const Container=styled.div`
width:100%;
display: flex;
justify-content:space-between;
${mobile({flexDirection:"column"})};
`
const Categories = () => {
    return (
        <Container>
            {categories.map(item=>{
                return <CategoryItem key={item.id} item={item}/>
            })}
        </Container>
    )
}

export default Categories
