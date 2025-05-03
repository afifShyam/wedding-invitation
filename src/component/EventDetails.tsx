import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  SimpleGrid
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export default function EventDetails() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <VStack spacing={6} mb={12}>
        <Heading size="lg">Maklumat Majlis</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
          <Box bg="whiteAlpha.900" p={5} rounded="md" shadow="md">
            <Heading size="md" mb={2}>📅 Tarikh & Masa</Heading>
            <Text>Ahad, 30 November 2025</Text>
            <Text>11:00 pagi – 4:00 petang</Text>
          </Box>
          <Box bg="whiteAlpha.900" p={5} rounded="md" shadow="md">
            <Heading size="md" mb={2}>📍 Lokasi</Heading>
            <Text>Dewan Raja Muda Musa</Text>
            <Text>Seksyen 7, Shah Alam, Selangor</Text>
          </Box>
        </SimpleGrid>

        <Box w="full" h="650px" borderRadius="md" overflow="hidden" mt={6}>
          <iframe
            title="Lokasi Majlis"
            src="https://www.google.com/maps?q=3.0628166,101.510379&hl=es;z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Stack direction="row" spacing={4} mt={4} justify="center">
          <Button
            as="a"
            href="https://www.google.com/maps?q=3.0628166,101.510379"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            variant="solid"
          >
            Buka di Google Maps
          </Button>
          <Button
            as="a"
            href="https://waze.com/ul?ll=3.0628166,101.510379&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="purple"
            variant="outline"
          >
            Buka di Waze
          </Button>
        </Stack>
      </VStack>
    </MotionDiv>
  );
}