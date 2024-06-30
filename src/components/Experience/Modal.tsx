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
      <DialogTrigger className="text-blue-200 underline">
        Ver más
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
