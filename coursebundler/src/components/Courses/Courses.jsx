import {
  Container,
  HStack,
  Heading,
  Button,
  Image,
  Input,
  Text,
  Stack,
  VStack,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayList,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-sarif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
      </HStack>

      <Heading
        size={'xs'}
        textTransform={'uppercase'}
        textAlign={'center'}
        children={`Lecture - ${lectureCount}`}
      />

      <Heading
        size={'xs'}
        textTransform={'uppercase'}
        children={`Views - ${views}`}
      />

      <Stack direction={['column','row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>

            <Button colorScheme='yellow'>Watch Now</Button>
        </Link>
    
        <Button onClick={()=> addToPlayList(id)} variant={'ghost'} colorScheme='yellow'>Add To PlayList</Button>
      </Stack>
    </VStack>
  );
};

const addToPlayList = () =>{
console.log("first")
}

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  let categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Stucture & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type={'text'}
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => {
          return (
            <Button key={index} minW={'60'} onClick={() => setCategory(item)}>
              <Text children={item} />
            </Button>
          );
        })}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
        title={'sample'}
        description={'sample'}
        views={22}
        imageSrc={'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000'}
        creator={'simple girl'}
        lectureCount={2}
        addToPlayList={addToPlayList}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
