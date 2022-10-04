import { FC } from 'react';

import { useGeoState } from '../../context/GeoManager';

import { Status } from '../../components';
import { MdRoom } from 'react-icons/md';

import { Container, City } from './Header.styles';

const Header: FC = () => {
  const geoInfo = useGeoState();

  return (
    <Container>
      <Status />
      <City>
        <MdRoom />
        {geoInfo.city}
      </City>
    </Container>
  );
};

export default Header;
