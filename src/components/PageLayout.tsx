import { Header } from "./Header";
import { SideBar } from "./navigation/SideBar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex h-dvh w-dvw">
      <SideBar />

      <div className="flex-1 p-4 space-y-4">
        <Header />
        {children}
      </div>
    </div>
  );
};
