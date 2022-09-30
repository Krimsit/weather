import { Layout } from "antd"

import { GeoProvider } from "./context/GeoManager"

import { Header, Main } from "./container"
import {Temperature, Weather, CurrentTime} from './modules';

import { GlobalStyle, Content } from "./App.styles"

const App = () => {
    return (
        <GeoProvider>
            <GlobalStyle />
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
  );
}

export default App;
