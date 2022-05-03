import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name: string;
    formLabel ?: string;
} 

export function Input ({name, formLabel, ...rest}: InputProps) {

    return (
        <FormControl>
          <FormLabel htmlFor={name}> {formLabel} </FormLabel>
            <ChakraInput
            id={name}
            name={name}
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled" 
            _hover={{
              bgColor: "gray.900"
            }}
            {...rest}

            />
        </FormControl>
        

    )

}

