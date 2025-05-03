import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Textarea,
  useBreakpointValue
} from '@chakra-ui/react';
import Countdown from '../features/countdown/Countdown';
import { useRSVPStore } from '../store/rsvpStore';
import bgImage from '/src/assets/wed_bg.jpg';

import { motion, isValidMotionProp } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/system';
import WishesCarousel from '../component/WishesCarousel';
import EventDetails from '../component/EventDetails';
import RSVP from '../component/RSVP';

// ✅ Properly support Framer Motion props
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  const { name, guests, isAttending, message, setField, reset } = useRSVPStore();
  const cardWidth = useBreakpointValue({ base: '100%', md: '100%' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`RSVP for ${name} received!`);
    reset();
  };

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      {/* 🌸 Animated Background */}
      <Box
        position="absolute"
        inset={0}
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        filter="blur(5px)"
        animation="scaleAnimation 30s ease-in-out infinite alternate"
        zIndex={0}
      />
      <Box position="absolute" inset={0} bg="rgba(255,255,255,0.5)" zIndex={1} />

      {/* 🌟 Foreground Content */}
      <Box
        position="relative"
        zIndex={2}
        px={4}
        py={10}
        textAlign="center"
        maxW="6xl"
        mx="auto"
      >
        {/* 💖 Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <VStack spacing={6} mb={12}>
            <Heading fontSize={['3xl', '5xl']} fontFamily="'Great Vibes', cursive" color="pink.700">
              Afif & Humaira
            </Heading>
            <Text fontSize="xl" color="gray.700">
              Kami akan berkahwin pada 30 November 2025
            </Text>
            <Countdown />
          </VStack>
        </motion.div>

        {/* 📅 Event Details */}
        <EventDetails />  

        {/* 💌 RSVP Form */}
        <RSVP />

        {/* 💌 Wishes Carousel */}
        <WishesCarousel />
      </Box>
    </Box>
  );
}