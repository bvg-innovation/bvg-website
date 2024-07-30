import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HTMLChakraProps,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";
import { FC, memo } from "react";

export interface TextInputProps extends HTMLChakraProps<"input"> {
  label?: string;
  helpMessage?: string;
  onChangefunc?: any;
  width?: string;
  height?: string;
  variant?: string;
  isDisabled?: boolean;
  validate?: any;
  max?: string;
  bg?: string;
  accept?: string;
  isReadOnly?: boolean;
  placeholderColor?: any;
  type?: string;
  isLoading?: boolean;
}

// eslint-disable-next-line react/display-name
export const TextInput: FC<TextInputProps> = memo(
  ({
    name = "",
    type = "text",
    placeholder,
    label,
    isDisabled,
    helpMessage,
    onChangefunc,
    width = "100%",
    variant = "outline",
    value,
    validate,
    max,
    required,
    min,
    accept,
    isReadOnly = false,
    onBlur,
    height,
  }) => {
    const fieldHookConfig: FieldHookConfig<any> = {
      name,
      validate,
    };

    const [field, { touched, error }] = useField(fieldHookConfig);
    const hasError = isReadOnly ? !!error : !!(touched && error);

    return (
      <FormControl id={name} isInvalid={hasError}>
        {label && (
          <FormLabel color={"black"} display={"flex"}>
            {label}
            {required && <Text color={"red"}> * </Text>}
          </FormLabel>
        )}

        <InputGroup>
          <Input
            {...field}
            type={type}
            color={"black"}
            borderColor={"gray.300"}
            placeholder={placeholder}
            width={width}
            height={height}
            variant={variant}
            max={max}
            min={min}
            value={value ?? field.value}
            onChange={(event: any) => {
              onChangefunc(event);
            }}
            isReadOnly={isReadOnly}
            isDisabled={isDisabled}
            accept={accept}
            onBlur={(e) => {
              field.onBlur(e);
              onBlur && onBlur(e);
            }}
            _hover={{ backgroundColor: "transparent" }}
          />
        </InputGroup>

        {hasError && <FormErrorMessage>{error}</FormErrorMessage>}
        {helpMessage && <FormHelperText p={1}>{helpMessage}</FormHelperText>}
      </FormControl>
    );
  },
);
