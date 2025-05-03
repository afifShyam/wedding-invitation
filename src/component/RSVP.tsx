import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  import { useRSVPStore } from '../store/rsvpStore';
  
  const MotionBox = motion.div;
  
  export default function RSVPForm() {
    const { name, guests, isAttending, message, setField, reset } = useRSVPStore();
    const cardWidth = useBreakpointValue({ base: '100%', md: '100%' });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`RSVP for ${name} received!`);
      reset();
    };
  
    return (
      <MotionBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Box
          w={cardWidth}
          maxW="lg"
          mx="auto"
          bg="whiteAlpha.900"
          p={6}
          borderRadius="md"
          boxShadow="lg"
        >
          <Heading size="md" mb={4}>Sahkan Kehadiran Anda</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nama Anda</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setField('name', e.target.value)}
                  placeholder="Contoh: Ali Bin Abu"
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>Bilangan Tetamu</FormLabel>
                <Input
                  type="number"
                  value={guests}
                  onChange={(e) => setField('guests', Number(e.target.value))}
                  placeholder="Contoh: 2"
                />
              </FormControl>
  
              <FormControl as="fieldset">
                <FormLabel as="legend">Kehadiran</FormLabel>
                <RadioGroup
                  onChange={(val) => setField('isAttending', val === 'yes')}
                  value={isAttending === true ? 'yes' : isAttending === false ? 'no' : ''}
                >
                  <Stack direction="row" spacing={6} justify="center">
                    <Radio value="yes" colorScheme="teal">Hadir</Radio>
                    <Radio value="no" colorScheme="red">Tidak Hadir</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
  
              <FormControl>
                <FormLabel>Ucapan (jika ada)</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => setField('message', e.target.value)}
                  placeholder="Ucapan ringkas atau doa"
                />
              </FormControl>
  
              <Button type="submit" colorScheme="teal" w="full">
                Hantar RSVP
              </Button>
            </VStack>
          </form>
        </Box>
      </MotionBox>
    );
  }