import { Layout } from "antd"

import { GeoProvider } from "./context/GeoManager"

import { Header, Main } from "./container"
import { CurrentTime, Temperature, Weather } from "./modules"

import { Content, GlobalStyle } from "./App.styles"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GeoProvider>
        <Layout style={{ height: "100%" }}>
          <Header />
          <Main>
            <Content>
              <CurrentTime />
              <Weather />
              <Temperature />
            </Content>
          </Main>
        </Layout>
      </GeoProvider>
    </>
  )
}

export default App
