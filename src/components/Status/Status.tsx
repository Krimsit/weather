import { FC } from 'react';

import { useIsOnline } from '../../hooks';

import { Container, Pointer, Text } from './Status.styles';

const Status: FC = () => {
  const isOnline = useIsOnline();

  return (
    <Container>
      <Pointer isOnline={isOnline} />
      <Text>{isOnline ? 'Онлайн' : 'Оффлайн'}</Text>
    </Container>
  );
};

export default Status;
