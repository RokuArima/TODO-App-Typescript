import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick } = props;
  return <Button variant="contained" onClick={onClick}>{children}</Button>;
};
