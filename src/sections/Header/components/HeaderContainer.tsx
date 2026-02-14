import { Logo } from "@/components/Logo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";

type HeaderContainerProps = {
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
};

export const HeaderContainer = ({ isMobileMenuOpen, onMobileMenuToggle }: HeaderContainerProps) => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between max-w-none w-full mx-auto px-6 py-4 md:max-w-screen-xl">
      <Logo />
      <MobileMenuButton isOpen={isMobileMenuOpen} onClick={onMobileMenuToggle} />
      <DesktopNav />
    </div>
  );
};
