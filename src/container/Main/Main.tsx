import { FC } from "react"

import { MainProps } from "./Main.interface"

import { Container } from "./Main.styles"

const Main: FC<MainProps> = ({ children }) => {
    return <Container>
        {children}
    </Container>
}

export default Main