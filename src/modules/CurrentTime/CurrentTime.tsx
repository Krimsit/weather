import { useCurrentTime } from './hooks';

import { MdCalendarToday } from 'react-icons/md';

import { Container, Time, Date } from './CurrentTime.styles';

const CurrentTime = () => {
  const { time, date } = useCurrentTime();

  return (
    <Container>
      <Time>{time}</Time>
      <Date>
        <MdCalendarToday /> {date}
      </Date>
    </Container>
  );
};

export default CurrentTime;
