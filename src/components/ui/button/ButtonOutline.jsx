import { Button } from '@chakra-ui/react';

export function ButtonOutline({ text, leftIcon, onClick, isActive, ...props }) {
  return (
    <Button
      paddingBlock={props.paddingBlock || 4}
      justifyContent={props.justifyContent || 'flex-start'}
      leftIcon={leftIcon}
      _active={{
        bgColor: 'brand.500',
        color: 'white',
      }}
      onClick={onClick}
      isActive={isActive}
      {...props}
    >
      {text}
    </Button>
  );
}
