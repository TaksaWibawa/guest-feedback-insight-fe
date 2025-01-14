import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

export const InputCustom = ({ label, name, type, value, onChange, error, isLoading }) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        isDisabled={isLoading}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
