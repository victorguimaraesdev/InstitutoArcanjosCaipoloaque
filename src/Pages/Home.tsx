
import { ContainerFooter } from '../components/Footer/Container.Footer'
import { ContainerHeader } from '../components/Header/Container.Header'
import { ContainerNav } from '../components/Nav/Container.Nav'
import { ContainerBaner } from '../components/Baner/Container.Baner'

export const Home = () => {
    return (
        <>
            <ContainerHeader />
            <ContainerNav />
            <ContainerBaner />
            <ContainerFooter />
        </>
    )
}