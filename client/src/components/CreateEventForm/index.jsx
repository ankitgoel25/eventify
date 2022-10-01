import { useState, useRef, useEffect } from 'react';
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

const CreateEventForm = () => {
//   const [image, setImage] = useState(null);
//   const [formFields, setFormFields] = useState({
//     eventName,
//     community,
//     fromDate,
//     toDate,
//     fees,
//     description
//   })

//   const address = useAddress();
//   const eventContract = useContract('0x5FbDB2315678afecb367f032d93F642f64180aa3');

//   const handleFormFields = (e) => {
//     setFormFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   }

//   const onSubmit= async()=>{
//     const eventTimeStamp = Math.floor(toDate)
//     const eventId = await eventContract.contract.function.createNewEvent(eventTimeStamp, formFields.fees, formFields.maxCapacity, formFields.eventName);
//   }

  return (
    <Box>
      <Flex>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md' mr={10}>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='eventName'>
              Event Name
            </FormLabel>
            <Input id='eventName' placeholder='Event Name' boxShadow='base' />
          </FormControl>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='community'>
              Organizing Community
            </FormLabel>
            <Input id='community' placeholder='Organization Name' boxShadow='base'  />
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
                
              />
            </FormControl>
            <FormControl mb={6} w='47%' isRequired>
              <FormHelperText mb={2}>To</FormHelperText>
              <Input
                type='datetime-local'
                id='toDate'
                boxShadow='base'
                
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
              placeholder='Enter the secure deposit'
              boxShadow='base'
              type='number'
              
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
            placeholder='Here is a sample placeholder'
            boxShadow='base'
            id='description'
            size='lg'
            rows={4}
            isRequired
            
          />
        </FormControl>
      </Box>
      <Box w='100%' display='flex' justifyContent='center'>
        <Button mt={7} w={200} h={50} mb={6}>
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

export default CreateEventForm;
