import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  IconButton,
} from '@chakra-ui/react';

const PersonalForm = () => (
  <>
    <FormControl className="SEANFORM" maxWidth="500px">
      <FormLabel>Label</FormLabel>
      <Input />
      <Textarea mt={2} backgroundColor="cyan.50" />
    </FormControl>
    <IconButton
      aria-label="submit"
      bg="cyan.100"
      // icon="copy"
      placeholder="click"
    />
  </>
);

export default PersonalForm;
