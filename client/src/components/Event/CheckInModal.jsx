import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import CheckInCard from './CheckInCard';

const CheckInModal = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Check-in Participants</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb='7' px='0'>
          <Box px='6'>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdSearch color='gray.300' />}
              />
              <Input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search participants with email address or name'
              />
              {search.trim().length > 0 && (
                <InputRightElement width='4.5rem'>
                  <Button
                    h='1.75rem'
                    size='sm'
                    bg='gray.100'
                    color='brand.600'
                    _hover={{ bgColor: 'gray.200' }}
                    onClick={() => setSearch('')}
                  >
                    Clear
                  </Button>
                </InputRightElement>
              )}
            </InputGroup>
          </Box>
          <Box mt='6' maxH='60vh' overflowY='auto' px='6'>
            {[...Array(100).keys()].map((i) => {
              const lowerSearch = search.toLowerCase();
              if (
                !`eventcrowbhai${i}@gmail.com`
                  .toLowerCase()
                  .includes(lowerSearch) &&
                !`Ankit Goel ${i}`.toLowerCase().includes(lowerSearch)
              ) {
                return null;
              }
              return (
                <CheckInCard
                  key={i}
                  data={{
                    id: i,
                    name: `Ankit Goel ${i}`,
                    email: `eventcrowbhai${i}@gmail.com`,
                  }}
                />
              );
            })}
          </Box>
        </ModalBody>

        {/* <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default CheckInModal;
