import "./button.styles.jsx";
import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButtonComponent = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  const buttons = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };

  return buttons[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButtonComponent(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
