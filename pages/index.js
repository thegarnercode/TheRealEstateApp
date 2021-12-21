import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

// m stands for margin //
const Banner = ({ purpose,title1, title2, desc1,desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexwrap="wrap" justifycontent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3x1" fontWeight="bold">{title}<br />{title}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}</Text>
      <Buttom fontSize="xl" backgroung="blue.300" color="white">
        <Link href={linename}>{buttonText}</Link>

      </Buttom>

    </Box>

  </Flex>
)

export default function Home() {
  return (
    <div> 
      <h1> Hello World </h1>
    <Banner 
      purpose="RENT A HOME"
      title1="Rent Homes For"
      title2="Everyone"
      desc1="Explore Apartments, Villas, Homes"
      desc2=" and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl=""

    
    />
    <Banner 
      purpose={'For Rent'} 
    
    />
    </div>
  )
}
