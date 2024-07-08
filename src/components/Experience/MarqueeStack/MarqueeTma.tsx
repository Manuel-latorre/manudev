import ChatGPTIcon from "@/components/icons/ChatGPTIcon";
import CloudinaryIcon from "@/components/icons/CloudinaryIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import FirebaseIcon from "@/components/icons/FirebaseIcon";
import MongoDbIcon from "@/components/icons/MongoDbIcon";
import NextIcon from "@/components/icons/NextIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";



const reviews = [
  {
    name: "Typescript",
    icon: <TypescriptIcon/>
  },
  {
    name: "React Native",
    icon: <ReactIcon/>
  },
  {
    name: "Firebase Cloud Messaging",
    icon: <FirebaseIcon/>
  },
  {
    name: "Cloudinary",
    icon: <CloudinaryIcon/>
  },
];

const ReviewCard = ({
  icon,
  name,

}: {
  icon?: JSX.Element;
  name: string;

}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl",
      )}
    >
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
            {icon}
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeTma() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:40s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} name={review.name} icon={review.icon}/>
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l nav"></div> */}
    </div>
  );
}
