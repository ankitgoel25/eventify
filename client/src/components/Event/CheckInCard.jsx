import { Button, Flex, Text } from '@chakra-ui/react';

const CheckInCard = ({ data }) => {
  return (
    <Flex
      boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      borderRadius='10px'
      w='full'
      px='4'
      py='4'
      justify='space-between'
      align='center'
      mb='4'
    >
      <Flex direction='column'>
        <Text fontSize='16px' fontWeight='500'>
          {data.name}
        </Text>
        <Text fontSize='14px'>{data.email}</Text>
      </Flex>
      <Button>Check In</Button>
    </Flex>
  );
};

export default CheckInCard;
