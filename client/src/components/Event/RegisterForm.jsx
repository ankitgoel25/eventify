import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

const RegisterForm = () => {
  const address = useAddress();

  return (
    <Box>
      <Text fontSize='2xl' fontWeight='600'>
        Register for the Event
      </Text>
      {!address ? (
        <Text>Connect your wallet to register for the event!</Text>
      ) : (
        <>
          <Text fontSize='sm' fontWeight='400' color='gray.400' mt='2'>
            Please fill all the marked (*) fields
          </Text>
          <Box mt='6'>
            <Flex justify='space-between' align='center'>
              <FormControl w='48%' mb={6} isRequired>
                <FormLabel fontSize={18} htmlFor='fullName'>
                  Full Name
                </FormLabel>
                <Input id='fullName' placeholder='Full Name' boxShadow='base' />
              </FormControl>
              <FormControl w='48%' mb={6} isRequired>
                <FormLabel fontSize={18} htmlFor='email'>
                  Email Address
                </FormLabel>
                <Input
                  id='email'
                  placeholder='Email Address'
                  boxShadow='base'
                />
              </FormControl>
            </Flex>
            <Flex justify='space-between' align='center'>
              <FormControl w='48%' mb={6} isRequired>
                <FormLabel fontSize={18} htmlFor='contact'>
                  Contact Number
                </FormLabel>
                <Input
                  id='contact'
                  placeholder='Enter your contact number'
                  boxShadow='base'
                />
              </FormControl>
              <FormControl w='48%' mb={6} isRequired>
                <FormLabel fontSize={18} htmlFor='contact'>
                  Gender
                </FormLabel>
                <Select placeholder='Select option' boxShadow='base'>
                  <option value='option1'>Male</option>
                  <option value='option2'>Female</option>
                  <option value='option3'>Others</option>
                  <option value='option3'>Prefer not to say</option>
                </Select>
              </FormControl>
            </Flex>
            <FormControl mb={6} isRequired>
              <FormLabel fontSize={18} htmlFor='about'>
                Write a few lines about yourself
              </FormLabel>
              <Textarea
                placeholder='About yourself'
                boxShadow='base'
                id='about'
                rows={3}
                isRequired
              />
            </FormControl>
            <FormControl mb={6} isRequired>
              <FormLabel fontSize={18} htmlFor='doubts'>
                Any questions for us?
              </FormLabel>
              <Textarea
                placeholder='You are free to ask any questions'
                boxShadow='base'
                id='doubts'
                rows={3}
                isRequired
              />
            </FormControl>
            <Box>
              <Checkbox>
                Do you wish to donate your security amount to a NGO if you&nbsp;
                <b>show up</b> at the event?
              </Checkbox>
            </Box>
            <Button mt='4'>Submit</Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default RegisterForm;
