import Navbar from "./Navbar"
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <header style={{ zIndex: 2 }} className='py-3 position-fixed top-0 w-100 bg-dark shdaow'>
                <Navbar />
            </header>
            <main className='container my-5 pt-5'>
                {children}
            </main>
        </>
    )
}

export default Layout