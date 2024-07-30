import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardProps,
  ResponsiveValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface ICardProps extends CardProps {
  width?: ResponsiveValue<number | string>;
  height?: number | string;
  bgColor?: string;
  borderRadius?: number | string;
  size?: string | "lg" | "md" | "sm" | "xs" | "xl" | "xxl";
  showButton?: boolean;
  children?: React.ReactNode;
}

const CardComponent: FC<ICardProps> = ({
  width,
  height,
  bgColor,
  borderRadius,
  size = "md",
  showButton = true,
  children,
  ...rest
}) => {
  return (
    <Card
      bgColor={bgColor}
      p={"10px"}
      borderRadius={borderRadius}
      width={width}
      align={"center"}
      size={size}
      boxShadow={"lg"}
    >
      <CardBody>{children}</CardBody>
      {showButton ? (
        <CardFooter>
          <Button width={"full"} variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export default CardComponent;
