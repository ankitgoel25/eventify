import { useRouter } from 'next/router';
import Event from '../../components/Event';

const EventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  return <Event id={eventId} />;
};

export default EventPage;
