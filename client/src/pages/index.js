import { Flex, Image } from '@chakra-ui/react';
import Hero from '../components/Landing/Hero';
import ProcessBlock from '../components/Landing/ProcessBlock';
import About from '../components/Landing/About';
import FutureScopeCard from '../components/Landing/FutureScopeCard';
import Footer from '../components/Landing/Footer';

const Home = () => {
  return (
    <Flex flexDirection='column' bg='brand.100' h='100%'>
      <Hero />
      {/* Process Flow */}
      <Flex
        flexDirection='column'
        alignItems='center'
        color='brand.600'
        mt={['8', null]}
      >
        <About />
        <ProcessBlock
          flexD='row'
          imageSrc='/images/process2.jpg'
          animatedHead='Organize'
          nonAnimatedHead=' Events'
          content="You can create event on Eventify and get attendees registered for the event with an assurance.
          Follow some simple steps to create an event and it would be added to our events' list that will be visible to people all
          over the globe. Attendees will register with a minimal security fee. If they dont't make it to the venue a part of 
          security fee will be transacted to your account, a part to a charity and a part to Eventify."
        />
        <ProcessBlock
          flexD='row-reverse'
          imageSrc='/images/process1.jpg'
          animatedHead='Attend'
          nonAnimatedHead=' Events'
          content='You can attend the event by registering on the events listed on Eventify by following some simple steps. You will have
          to pay a security fee of minimal amount that you will be able to get back on successful check-in. You can cancel your 
          registration within the time period specified by the organizer and get refund. If you will not show up at the event you will not 
          get any refund. Else you will get a choice whether to get the refund or donate to the charity.'
        />
      </Flex>
      {/* Future scope section */}
      <Flex
        mt={['12', '12', '12', '12', '10']}
        justifyContent='center'
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'normal']}
        flexWrap='wrap'
      >
        <FutureScopeCard
          heading='Advanced Event Analytics'
          content='We will provide Event Analytics in the form of beautiful charts and visualizations that will help the organizers 
          to analyze the event response, and fix any shortcomings in their future events.'
        />
        <FutureScopeCard
          heading='Multi-Chain Support'
          content='We will be supporting multiple crypto chains so as to give the attendees and organizers freedom to use any 
          cryptocurrency on our platform.'
        />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
