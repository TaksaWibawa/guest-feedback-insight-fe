import {
  Box,
  Button,
  Flex,
  Heading,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import { capitalizeSentence } from '@/utils';
import { ModalBase } from '.';
import { useReviewDetailStore } from '@/stores';
import React from 'react';

export function ModalDetailReview({ isOpen, onClose }) {
  const { data } = useReviewDetailStore();

  const setSentimentColor = (sentiment) => {
    if (sentiment === 'positive') return 'green.500';
    if (sentiment === 'negative') return 'red.500';
    return 'gray.500';
  };

  const sortSentiment = (asqe) => {
    const sortedAsqe = asqe?.sort((a, b) => {
      if (a.sentiment === 'positive') return -1;
      if (b.sentiment === 'positive') return 1;
      if (a.sentiment === 'negative') return -1;
      if (b.sentiment === 'negative') return 1;
      return 0;
    });

    return sortedAsqe || [];
  };

  const sortedAsqe = sortSentiment(data?.asqe);

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalHeader
        display={'flex'}
        flexDirection={'column'}
        gap={1}
      >
        <Heading
          as={'h2'}
          size={'lg'}
        >
          Detail Review
        </Heading>
      </ModalHeader>
      <ModalBody>
        <Text
          fontSize={'md'}
          fontWeight={'semibold'}
          fontStyle={'italic'}
          textAlign={'justify'}
        >
          {capitalizeSentence(data?.review) || 'No Review'}
        </Text>
        <Flex
          flexDirection={'column'}
          justifyContent={'flex-start'}
          gap={2}
          mt={4}
        >
          <Text
            fontSize={'2xl'}
            fontWeight={'semibold'}
          >
            Sentiment Insight
          </Text>
          <Box as={'span'}>
            {sortedAsqe.map((word, index) => (
              <React.Fragment key={index}>
                <Text
                  as="span"
                  fontWeight={'semibold'}
                  color={setSentimentColor(word.sentiment)}
                  verticalAlign={'middle'}
                >
                  {capitalizeSentence(word.opinion) || 'No Opinion'}{' '}
                </Text>
                <Text
                  as="span"
                  fontSize={'xs'}
                  verticalAlign={'bottom'}
                  color={setSentimentColor(word.sentiment)}
                  fontWeight={'semibold'}
                >
                  ({word.category || 'no category'})
                </Text>
                {index < sortedAsqe.length - 1 && (
                  <Text
                    as="span"
                    fontSize={'xs'}
                  >
                    {' '}
                    •{' '}
                  </Text>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Flex>
      </ModalBody>
      <ModalFooter mt={2}>
        <Button
          onClick={onClose}
          colorScheme="brand"
          variant="outline"
          _hover={{
            bgColor: 'brand.500',
            color: 'white',
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </ModalBase>
  );
}
