import { Button } from "@mui/material";

const ButtonSubmit = ({
  color,
  text,
  type,
  variant,
  onSubmit,
  mt = 3,
  mb = 2,
  ml,
  mr,
}) => {
  return (
    <Button
      color={color}
      type={type}
      fullWidth
      variant={variant}
      sx={{ mt, mb, ml, mr }}
      onClick={onSubmit}
    >
      {text}
    </Button>
  );
};

export { ButtonSubmit };
