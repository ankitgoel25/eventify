import { Box, Flex } from '@chakra-ui/react';
import EventCard from '../components/Event/Card.jsx';
import data from '../utils/data.js';
import { MdOutlineExplore } from 'react-icons/md';
import TopBorder from '../components/Landing/TopBorder.jsx';
import { useEffect, useState } from 'react';
import * as firestore from 'firebase/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';

const ExplorePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const eventsRef = collection(db, 'Events');

    // Create a query against the collection.
    const todayDate = new Date();
    const q = query(eventsRef, where('fromDate', '>', todayDate));
    firestore
      .getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const newEvent = { ...doc.data(), id: doc.id };
          if (events.length != 0) {
            setEvents( [...events, newEvent]);
          }else{
            setEvents([newEvent]);
          }
        });
      })
      .then(() => {
        setLoading(false);
      });
  };
  return (
    <Box mx='10%' mt='6'>
      <Flex w='fit-content' direction='column' mb='8'>
        <Flex align='center' fontSize='3xl' fontWeight='600'>
          <span>Explore Events</span>
          <MdOutlineExplore style={{ marginLeft: 8 }} />
        </Flex>
        <TopBorder borderH='0.15rem' />
      </Flex>
      <Flex my='4' justify='center' wrap='wrap'>
        {data.map((e, i) => (
          <EventCard key={i} data={e} present />
        ))}
      </Flex>
    </Box>
  );
};

export default ExplorePage;
