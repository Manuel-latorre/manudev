import {  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExpandIcon from "../icons/ExpandIcon";

interface Props{
    title:string
    description:JSX.Element
}

const Modal = ({description, title}:Props) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 bg-white rounded-lg p-2 text-[#14192E]">
        Acerca del puesto
        <ExpandIcon/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-blue-200">{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
