import { Button } from "../ui/button";

export const SideBar = () => {
  return (
    <aside className="hidden md:block w-[280px] min-w-[280px] border-r-[1px] border-border p-2">
      <Button className="w-full" variant="outline">
        Dashboard
      </Button>
    </aside>
  );
};
