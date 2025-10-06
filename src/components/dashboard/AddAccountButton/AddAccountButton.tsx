import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Action Button

const AddAcccountButton = () => {
  const handleClick = () => {
    toast.error("Max number of accounts reached", { position: "top-center" });
  };

  return (
    <Button
      className="fixed bottom-4 right-4"
      size="icon-lg"
      onClick={handleClick}
    >
      <Plus />
    </Button>
  );
};

export default AddAcccountButton;
