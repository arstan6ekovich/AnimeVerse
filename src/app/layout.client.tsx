import Layout from "@/components/layout/Layout";
import { FC, ReactNode } from "react";

interface LayoutClientType {
  children: ReactNode;
}
const LayoutClient: FC<LayoutClientType> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutClient;
