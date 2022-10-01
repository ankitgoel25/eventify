import { Flex, Image } from '@chakra-ui/react';
import NavBar from '../components/Landing/Navbar';
import Hero from '../components/Landing/Hero';
import ProcessBlock from '../components/Landing/ProcessBlock';
import About from '../components/Landing/About';
import FutureScopeCard from '../components/Landing/FutureScopeCard';
import Footer from '../components/Landing/Footer';

const Home = () => {
  return (
    <Flex flexDirection='column' bg='brand.100' h='100%'>
      <NavBar />
      <Hero />
      {/* <Image
        mx={['4', '10', '16', '32']}
        borderRadius='12'
        src='/images/events.svg'
        alt='Dashboard'
        boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'
      /> */}
      {/* Process Flow */}
      <Flex
        flexDirection='column'
        alignItems='center'
        color='brand.600'
        mt={['8', null]}
      >
        <ProcessBlock
          flexD='row'
          // imageSrc={LoginImg}
          animatedHead='Sign in'
          nonAnimatedHead=' to your free account'
          content="It's completely free of cost to get yourself registered on EnormoQB. 
          All you need is your Gmail address to create an account or sign in. Your anonymity will be maintained. 
          After logging in, you will land on the dashboard and become one of the many brilliant minds contributing 
          to our question bank and helping to make the examination system better in India."
        />
        <ProcessBlock
          flexD='row-reverse'
          // imageSrc={PostQuestionsImg}
          animatedHead='Contribute'
          nonAnimatedHead=' questions'
          content='Once registered, you will be able to contribute questions to our enormous question pool and 
          earn some exciting rewards. In order to do that you just have to follow some simple steps. 
          You can add questions to our question bank by providing all the necessary details and based on various 
          filters provided. Then wait for the reviewing committee to update the status of the question to approved or rejected.'
        />
        <ProcessBlock
          flexD='row'
          // imageSrc={GenerateImg}
          animatedHead='Generate'
          nonAnimatedHead=' question papers'
          content='Question papers can be generated with the questions available in the EnormoQB 
          question bank by following some simple steps. Enter the required details and submit them. 
          Then you can preview the question paper generated. New questions can be added and the 
          questions can also be reordered manually. Then you can simply download the desidered 
          question paper in a pdf format.'
        />
      </Flex>
      <About />
      {/* Future scope section */}
      <Flex
        mt={['24', '40', '44', '52', '44']}
        justifyContent='center'
        flexDirection={['column', 'column', 'row']}
        alignItems={['center', 'center', 'normal']}
        flexWrap='wrap'
      >
        <FutureScopeCard
          heading='Plagiarism'
          content='The question submitted by the contributor would go through a plagiarism 
          check so that the EnormoQB question bank will have original questions only.'
        />
        <FutureScopeCard
          heading='Optical Character Recognition(OCR)'
          content='Contributor would be able to upload the picture of the their handwritten 
          question and EnormoQB will extract the question from the picture uploaded.'
        />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
