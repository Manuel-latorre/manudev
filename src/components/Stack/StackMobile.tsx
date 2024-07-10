import { cn } from "@/lib/utils";import Marquee from "../ui/marquee";
import Technology from "./Technology";
import HtmlIcon from "../icons/HtmlIcon";
import CSSIcon from "../icons/CSSIcon";
import TailwindIcon from "../icons/TailwindIcon";
import ReactIcon from "../icons/ReactIcon";
import NextIcon from "../icons/NextIcon";
import NodeIcon from "../icons/NodeIcon";
import SupabaseIcon from "../icons/SupabaseIcon";
import MongoDbIcon from "../icons/MongoDbIcon";
import PostgreSQLIcon from "../icons/PostgreSQLIcon";
import JavascriptIcon from "../icons/JavascriptIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import ExpressIcon from "../icons/ExpressIcon";

export function StackMobile() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        <Technology icon={<HtmlIcon />} name="HTML" />
        <Technology icon={<CSSIcon />} name="CSS" />
        <Technology icon={<JavascriptIcon />} name="Javascript" />
        <Technology icon={<TypescriptIcon />} name="Typescript" />
        <Technology icon={<TailwindIcon />} name="Tailwind css" />
        <Technology icon={<ReactIcon />} name="React" />
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        <Technology icon={<NextIcon />} name="Next Js" />
        <Technology icon={<NodeIcon />} name="Node Js" />
        <Technology icon={<ExpressIcon />} name="Express" />
        <Technology icon={<SupabaseIcon />} name="Supabase" />
        <Technology icon={<MongoDbIcon />} name="Mongo DB" />
        <Technology icon={<PostgreSQLIcon />} name="PostgreSQL" />
      </Marquee>
    </div>
  );
}
