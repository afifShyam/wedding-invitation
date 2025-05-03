import { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Wrap,
  WrapItem,
  useColorModeValue
} from '@chakra-ui/react';

const useCountdown = (targetDate: Date) => {
  const countDownDate = targetDate.getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  const getTimeParts = (ms: number) => {
    const days = Math.max(Math.floor(ms / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
    const minutes = Math.max(Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)), 0);
    const seconds = Math.max(Math.floor((ms % (1000 * 60)) / 1000), 0);
    return [days, hours, minutes, seconds];
  };

  return getTimeParts(countDown);
};

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(new Date('2025-11-30T11:00:00'));
  const boxBg = useColorModeValue('whiteAlpha.800', 'gray.700');
  const labelColor = useColorModeValue('purple.700', 'purple.200');

  return (
    <Box textAlign="center" mt={6}>
      <Heading
        fontSize={['xl', '2xl']}
        fontFamily="'Great Vibes', cursive"
        color="purple.700"
        mb={4}
      >
        Countdown to Our Wedding 💍
      </Heading>

      <Wrap spacing="15px" justify="center">
        {[
          { label: 'Days', value: days },
          { label: 'Hours', value: hours },
          { label: 'Minutes', value: minutes },
          { label: 'Seconds', value: seconds }
        ].map((item, index) => (
          <WrapItem key={index}>
            <Box
              bg={boxBg}
              px={4}
              py={3}
              borderRadius="lg"
              boxShadow="md"
              minW="70px"
              textAlign="center"
            >
              <Text fontSize="2xl" fontWeight="bold" color="purple.800">
                {String(item.value).padStart(2, '0')}
              </Text>
              <Text fontSize="sm" color={labelColor}>
                {item.label}
              </Text>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}