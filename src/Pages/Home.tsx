
import { ContainerFooter } from '../components/Footer/Container.Footer'
import { ContainerHeader } from '../components/Header/Container.Header'
import { ContainerNav } from '../components/Nav/Container.Nav'
import { ContainerCardHome } from '../components/CardHome/Container.CardHome'
import { ContainerBaner } from '../components/Baner/Container.Baner'
import { ContainerCarrosel } from '../components/Carrosel/Container.Carrosel'



export const Home = () => {
    return (
        <>
            <ContainerHeader />
            <ContainerNav />
            <ContainerBaner />
            <ContainerCardHome />
            <ContainerCarrosel />
            <ContainerFooter />
        </>
    )
}