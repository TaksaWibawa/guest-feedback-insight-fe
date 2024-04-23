import { AspectRatio, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import UnauthorizedIllustration from '@/assets/unauthorized-illustration.svg';

export function PageUnauthorized() {
  const navigate = useNavigate();

  return (
    <Container
      maxW={'container.lg'}
      height={'100vh'}
      textAlign="center"
    >
      <Flex
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        direction={'column'}
        alignItems={'center'}
      >
        <AspectRatio
          ratio={1}
          width={'40%'}
        >
          <Image
            src={UnauthorizedIllustration}
            alt="Unauthorized Illustration"
          />
        </AspectRatio>
        <Flex
          direction={'column'}
          alignItems={'center'}
          maxW={'lg'}
          gap={2}
        >
          <Text
            fontSize={{ base: 'md', md: 'xl' }}
            fontWeight={'bold'}
          >
            You are not authorized to access this page.
          </Text>
          <Button
            colorScheme={'brand'}
            onClick={() => navigate('/')}
            size={{ base: 'sm', md: 'lg' }}
            fontSize={{ base: 'xs', md: 'md' }}
          >
            Go To Login Page
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
