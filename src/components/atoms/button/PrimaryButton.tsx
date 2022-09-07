import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: (index:number) => void;
  index: number;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick, index } = props;
  return <Button variant="contained" onClick={() => onClick(index)}>{children}</Button>;
};
