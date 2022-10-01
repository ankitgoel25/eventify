import {
  Box,
  Heading,
  Center,
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
  return (
    <Box>
      <Flex>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md' mr={10}>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='EventName'>
              Event Name
            </FormLabel>
            <Input id='EventName' placeholder='Event Name' boxShadow='base' />
          </FormControl>
          <FormControl mb={6} isRequired>
            <FormLabel fontSize={18} htmlFor='Community'>
              Organizing Community
            </FormLabel>
            <Input id='Community' placeholder='Event Name' boxShadow='base' />
          </FormControl>
        </Box>
        <Box borderRadius='5px' w='48%' flexShrink={0} rounded='md'>
          <FormControl mb={6}>
            <FormLabel fontSize={18} htmlFor='uploadImage'>
              Upload Image
            </FormLabel>
            {/* <ImageUploader image={image} setImage={setImage} /> */}
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
                type='date'
                id='fromDate'
                placeholder='Event Name'
                boxShadow='base'
              />
            </FormControl>
            <FormControl mb={6} w='47%' isRequired>
              <FormHelperText mb={2}>To</FormHelperText>
              <Input
                type='date'
                id='toDate'
                placeholder='Event Name'
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
