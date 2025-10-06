import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Header = () => {
  return (
    <div className="flex justify-between">
      <span className="font-medium text-2xl">Dashboard</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">EN</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>Russian</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
