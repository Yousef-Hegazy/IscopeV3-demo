import Icon from "../Icon";
import { Button } from "../ui/button";
import ModeDropdown from "./ModeDropdown";
import NavbarAvatar from "./NavbarAvatar";
import Sidebar from "./Sidebar";
import ThemeSettings from "./ThemeSettings";

const LayoutComponents = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-3 shadow-lg sticky top-0">
      <div className="flex flex-row items-center justify-start gap-3">
        <NavbarAvatar />

        <Button variant="outline" size="icon">
          <Icon icon="bell-alert" />
        </Button>

        <ModeDropdown />

        <ThemeSettings />
      </div>

      <Sidebar />
    </div>
  );
};

export default LayoutComponents;
