import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  IconButton,
  Box,
  Stack,
  Accordion,
  Flex,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, ArrowRightIcon } from '@chakra-ui/icons';

const PersonalForm = () => (
  <>
    <Stack width="100%" alignItems="center">
      <FormControl className="SEANFORM" maxWidth="500px">
        <FormLabel textAlign="center" fontWeight="normal" fontSize={30}>
          Say yo!
        </FormLabel>

        <Textarea mt={2} backgroundColor="cyan.50" />
      </FormControl>
      <IconButton
        variant="solid"
        colorScheme="twitter"
        aria-label="Send email"
        icon={<ArrowRightIcon />}
      />
    </Stack>
  </>
);

export default PersonalForm;
