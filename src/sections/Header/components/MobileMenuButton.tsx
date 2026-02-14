import { Menu, X } from 'lucide-react';

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
      <button 
        onClick={onClick}
        className="bg-transparent caret-transparent text-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-blue-950" />
        ) : (
          <Menu className="h-6 w-6 text-blue-950" />
        )}
      </button>
    </div>
  );
};
