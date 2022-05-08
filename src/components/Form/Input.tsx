import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError }from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    formLabel ?: string;
    error ?: FieldError;
} 

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, formLabel, error= null, ...rest}, ref) => {

    return (
        <FormControl isInvalid={!!error}>
          { !!formLabel && <FormLabel htmlFor={name}> {formLabel} </FormLabel>
 }
            <ChakraInput
              id={name}
              name={name}
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled" 
              _hover={{
                bgColor: "gray.900"
              }}
              ref={ref}
              {...rest}

            />

{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
        

    )

}


export const Input = forwardRef(InputBase);