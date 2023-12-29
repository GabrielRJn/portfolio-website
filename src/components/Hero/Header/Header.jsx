import { Box, Flex, Text, Image, Link } from '@chakra-ui/react';
import github from '../../../assets/github.png';
import gradcap from '../../../assets/gradcap.png';
import linkedin from '../../../assets/linkedin.png';

const Header = () => {
  return (
    <Flex
      backgroundColor="white"
      height={70}
      alignItems="center" 
      justifyContent="space-between"
    >
      <Text  fontSize={34} pl={28} color="#0C0C0C" opacity="60%" fontWeight="extrabold">
        Gabriel Johnson
      </Text>

      <Box display="flex" opacity="60%">
        <Link href="https://github.com/GabrielRJn" isExternal>
        <Image src={github} alt="GitHub" boxSize={16} marginX={2} p={2}/>
        </Link>
        <Link href="https://www.aru.ac.uk/study/undergraduate/computer-science-beng/module-details?mo=5da17682-02cc-44d0-b983-ec74c8f6ce96&co=e0e61042-5970-4752-b089-debb5809eb96&cp=3b74f0d0-cd5f-485e-9343-fbe10f8f9998" isExternal>
        <Image src={gradcap} alt="Graduation Cap" boxSize={16} marginX={2} p={2} />
        </Link>
        <Link href="https://www.linkedin.com/in/gabriel-johnson-a294951b9/">
        <Image src={linkedin} alt="LinkedIn" boxSize={16} marginX={2} p={2} />
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
