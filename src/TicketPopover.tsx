import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./components/ui/button";
import TicketForm from "./TicketForm";

function TicketPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"}>Create New Ticket</Button>
      </PopoverTrigger>
      <PopoverContent>
        <TicketForm />
      </PopoverContent>
    </Popover>
  );
}

export default TicketPopover;
