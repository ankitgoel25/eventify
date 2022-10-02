import { useState, useRef, useEffect } from 'react';
import * as firestore from 'firebase/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useAddress, useContract, useContractWrite } from '@thirdweb-dev/react';
import connectContract from '../../utils/connectContract';
import moment from 'moment';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import ImageUploader from './ImageUploder';
import { ethers } from 'ethers';

const CreateEventForm = () => {
  const [image, setImage] = useState(null);
  const [eventName, setEventName] = useState('');
  const [community, setCommunity] = useState('');
  const [fromDate, setFormDate] = useState();
  const [toDate, setToDate] = useState();
  const [fees, setFees] = useState(0);
  const [venue, setVenue] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async () => {
    const eventTimeStamp = moment(toDate).unix();
    const event = {
      eventName,
      community,
      startDate: fromDate,
      endDate: toDate,
      fees,
      venue,
      location,
      description,
      timestamp: eventTimeStamp,
    };
    console.log(event);
    await setDoc(doc(db, 'Events', 'wooooooooo'), {
      eventName,
      community,
      startDate: fromDate,
      endDate: toDate,
      fees,
      venue,
      location,
      description,
      confirmedRSV: [],
      claimedRSVP: [],
    });

    createEvent(event);
  };

  const createEvent = async (event) => {
    try {
      const eventsContract = connectContract();

      if (eventsContract) {
        let deposit = ethers.utils.parseEther(event.fees);

        const txn = await eventsContract.createNewEvent(
          event.timestamp,
          deposit,
          10,
          '12234435676',
          { gasLimit: 900000 },
        );
        console.log('Minting...', txn.hash);
        let wait = await txn.wait();
        console.log('Minted -- ', txn.hash);
        console.log(wait);
      } else {
        console.log('Error getting contract.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Flex>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md' mr={10}>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='eventName'>
              Event Name
            </FormLabel>
            <Input
              id='eventName'
              placeholder='Event Name'
              boxShadow='base'
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='community'>
              Organizing Community
            </FormLabel>
            <Input
              id='Community'
              placeholder='Name Of Organizers'
              boxShadow='base'
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md'>
          <FormControl mb={6}>
            <FormLabel fontSize={18} htmlFor='uploadImage'>
              Upload Image
            </FormLabel>
            <ImageUploader />
          </FormControl>
        </Box>
      </Flex>
      <Flex align='flex-end'>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md' mr={10}>
          <FormLabel fontSize={18} mb={0}>
            Select Date
          </FormLabel>
          <Flex justify='space-between'>
            <FormControl mb={6} w='47%' isRequired>
              <FormHelperText mb={2}>From</FormHelperText>
              <Input
                type='datetime-local'
                id='fromDate'
                boxShadow='base'
                onChange={(val) => setFormDate(val.target.value)}
              />
            </FormControl>
            <FormControl mb={6} w='47%' isRequired>
              <FormHelperText mb={2}>To</FormHelperText>
              <Input
                type='datetime-local'
                id='toDate'
                boxShadow='base'
                onChange={(val) => setToDate(val.target.value)}
              />
            </FormControl>
          </Flex>
        </Box>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md'>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='fees'>
              Fees
            </FormLabel>
            <Input
              id='fees'
              placeholder='Enter the secure deposit amount'
              boxShadow='base'
              type='number'
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </FormControl>
        </Box>
      </Flex>
      <Flex align='flex-end'>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md' mr={10}>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} mb={0}>
              Venue
            </FormLabel>
            <Input
              id='venue'
              placeholder='Event Venue'
              boxShadow='base'
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md'>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='fees'>
              Location Url
            </FormLabel>
            <Input
              id='location'
              placeholder='Google Maps link of the venue'
              boxShadow='base'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>
        </Box>
      </Flex>
      <Box w='full'>
        <FormControl isRequired>
          <FormLabel fontSize={18} htmlFor='description'>
            Description
          </FormLabel>
          <Textarea
            placeholder='Event Description'
            boxShadow='base'
            id='description'
            size='lg'
            rows={4}
            isRequired
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
      </Box>
      <Box w='100%' display='flex' justifyContent='center'>
        <Button mt={7} w={200} h={50} mb={6} onClick={() => onSubmit()}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default CreateEventForm;
