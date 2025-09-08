
import { ContainerFooter } from '../components/Footer/Container.Footer'
import { Banner } from '../components/Baner/Container.Baner'
import { ContainerHeader } from '../components/Header/Container.Header'
import { ContainerNav } from '../components/Nav/Container.Nav'

export const Home = () => {
    return (
        <>
            <ContainerHeader />
            <ContainerNav />
            <Banner />
            <ContainerFooter />
        </>
    )
}