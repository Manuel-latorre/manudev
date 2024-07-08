import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExpandIcon from "../icons/ExpandIcon";
import { MaximizeIcon } from "lucide-react";

interface Props {
  description: JSX.Element;
}

const Modal = ({ description}: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav">
        Acerca del puesto
        <MaximizeIcon width={18} height={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
