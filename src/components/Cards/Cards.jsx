import styled from 'styled-components'
import Card from '../Card/Card'
import DetailCard from '../DetailCard/DetailCard'

const $Cards = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 3.5vw;
    @media only screen and (min-width: 1024px){
        margin: 0 auto;
        padding: 64px;
        display: flex;
        justify-content: space-between;
    }
`
const $ContainerCards = styled.div`
    // width: 75%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen and (min-width: 1024px){
        max-width: 630px;
    }
`
const $ContainerDetailCard = styled.div`
    // width: 23.5%;
    width: 100%;
    @media only screen and (min-width: 1024px){
        width: 266px;
        padding-left: 13px;
    }
`
const $CardCol = styled.div`
    // width: 32%;
    margin-bottom: 5vw;
    display: flex;
    justify-content: center;

    width: 45vw;
    height: 45vw;
    @media only screen and (min-width: 400px){
        width: 30vw;
        height: 30vw;
        margin-bottom: 10px;
    }
    @media only screen and (min-width: 1024px){
        width: 32%;
        height: 215px;
        margin-bottom: 10px;
    }
`

const Cards = () => {
    return (
        <$Cards>
            <$ContainerCards>
                <$CardCol>
                    <Card />
                </$CardCol>
                <$CardCol>
                    <Card />
                </$CardCol>
                <$CardCol>
                    <Card />
                </$CardCol>
                <$CardCol>
                    <Card />
                </$CardCol>
                <$CardCol>
                    <Card />
                </$CardCol>
                <$CardCol>
                    <Card />
                </$CardCol>
            </$ContainerCards> 
            <$ContainerDetailCard>
                <DetailCard />
            </$ContainerDetailCard> 
        </$Cards>
    )
}

export default Cards
