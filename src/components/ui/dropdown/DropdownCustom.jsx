import { capitalizeSentence } from '@/utils';
import { Select } from '@chakra-ui/react';

export function DropdownCustom({ width, options, defaultValue, onChange, isLoading, ...props }) {
  return (
    <Select
      size={'sm'}
      maxW={'10rem'}
      w={width}
      defaultValue={defaultValue}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      isDisabled={isLoading}
      _hover={{
        cursor: 'pointer',
      }}
      {...props}
    >
      {options?.map((option) => {
        return (
          <option
            key={option?.name}
            value={option?.name}
          >
            {capitalizeSentence(option?.name)}
          </option>
        );
      })}
    </Select>
  );
}
