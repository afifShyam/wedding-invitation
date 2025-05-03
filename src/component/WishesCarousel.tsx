// src/components/WishesCarousel.tsx
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const wishes = [
  { name: "Aminah", message: "Semoga kekal bahagia hingga ke syurga 💖" },
  { name: "Farid", message: "Tahniah! Semoga dipermudahkan segalanya 🙏" },
  { name: "Sarah", message: "Selamat pengantin baru, semoga berkekalan 🕊️" },
  { name: "John", message: "Wishing you a lifetime of happiness 💍" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MotionDiv = motion.div;

export default function WishesCarousel() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
    >
    <Box mt={12}>
      <Heading size="lg" mb={6} color="pink.600">
        💌 Ucapan Tetamu
      </Heading>

      <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={4000}
          infinite
          arrows={false}
          showDots={false}
          keyBoardControl={false}
      >
        {wishes.map((wish, idx) => (
          <Box
            key={idx}
            bg="whiteAlpha.800"
            p={6}
            mx={3}
            borderRadius="md"
            boxShadow="md"
            minH="160px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <VStack spacing={2}>
              <Text fontSize="lg" fontStyle="italic">"{wish.message}"</Text>
              <Text fontWeight="bold" color="gray.700">– {wish.name}</Text>
            </VStack>
          </Box>
        ))}
      </Carousel>
    </Box>
    </MotionDiv>
  );
}