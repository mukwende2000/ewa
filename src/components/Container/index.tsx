import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  styles?: string;
};

function index({ children, styles }: Props) {
  return <div className={`${styles} w-[90%] m-auto`}>{children}</div>;
}

export default index;
