import {
  ArrowRight,
  Key,
  Pen,
  Sparkle,
  Vault,
} from "@phosphor-icons/react/dist/ssr";
import SpecialServiceButton from "../buttons/SpecialServiceButton";

const ServicesNav = () => {
  return (
    <div className="flex text-sm gap-3 flex-wrap">
      <div className="flex px-1 items-center gap-1">
        <p>Services</p>
        <ArrowRight weight="bold" />
      </div>
      <SpecialServiceButton href="/somanaai">
        AI
        <Sparkle weight="fill" />
      </SpecialServiceButton>
      <SpecialServiceButton href="/vault">
        <Vault weight="bold" />
        Vault
      </SpecialServiceButton>
      <SpecialServiceButton href="/anonshare">
        <Key weight="bold" />
        Anon Share
      </SpecialServiceButton>
    </div>
  );
};

export default ServicesNav;
