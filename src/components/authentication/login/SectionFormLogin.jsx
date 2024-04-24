import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { InputCustom } from '@/components/ui';
import GuestProIllustration from '@/assets/guestpro-full.png';

export function SectionFormLogin({ formHandler, loading }) {
  return (
    <Flex
      h={'100vh'}
      direction="column"
      justifyContent="center"
      gap={4}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        mb={4}
        mx={'auto'}
        w={{ base: '60%', md: '50%', lg: '80%' }}
      >
        <Image
          src={GuestProIllustration}
          alt="GuestPro"
          objectFit={'contain'}
        />
      </Box>
      <form onSubmit={formHandler.handleSubmit}>
        <Flex
          direction="column"
          gap={4}
        >
          <InputCustom
            label="Email"
            name="email"
            type="text"
            value={formHandler.values.email}
            onChange={formHandler.handleChange}
            error={formHandler.errors.email}
            isLoading={loading}
          />
          <InputCustom
            label="Password"
            name="password"
            type="password"
            value={formHandler.values.password}
            onChange={formHandler.handleChange}
            error={formHandler.errors.password}
            isLoading={loading}
          />
          <Button
            type="submit"
            bgColor={'brand.500'}
            color={'white'}
            _hover={{
              bgColor: 'brand.600',
            }}
            isLoading={loading}
          >
            Login
          </Button>
        </Flex>
      </form>

      <Text
        fontSize={{
          base: 'xs',
          md: 'sm',
        }}
        textAlign={'center'}
        color={'gray.500'}
        fontWeight={'bold'}
      >
        PKL Udayana 2024 - GuestPro
      </Text>
    </Flex>
  );
}
