import { FC } from "react"
import { Skeleton } from "antd"

import { useGeoState } from "../../context/GeoManager"

import { Status } from "../../components"
import { MdRoom } from "react-icons/md"

import { Container, City, CityLoader } from "./Header.styles"

const Header: FC = () => {
    const geoInfo = useGeoState()

    return <Container>
        <Status />
        {geoInfo.status === "loading" && <CityLoader />}
        {geoInfo.status === "success" && <City>
          <MdRoom />
            {geoInfo.city}
        </City>}
    </Container>
}

export default Header