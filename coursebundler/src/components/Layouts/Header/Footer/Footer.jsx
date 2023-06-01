import React from 'react';
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {TiSocialYutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10hv'}>
      <Stack direction={['column', 'row']}>
        <VStack   alignItems={['center','flex-start']}width={'full'}>
            <Heading children={"All Rights Reserved"} color={'white'}/>

            <Heading fontFamily={'body'} size='sm' children='@Shubhi sharma' color={'yellow.400'} />
        </VStack>

        <HStack spacing={['2','10']}
         justifyContent={'center'}
         color={'white'}
         fontSize={'50'}
        >
            <a href='https://instagram.com/___shubhiiiiiii___' target='_blank'><TiSocialInstagramCircular/></a>
            
{/* <TiSocialYutubeCircular/> */}
            <a href='https://github.com/shubhi221199' target='_blank'> <DiGithub/></a>
           
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
