import { ThemeProvider } from "@material-tailwind/react";

export default function ThemeWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


    return (
        <div>
          {children}
        </div>
    )
  }