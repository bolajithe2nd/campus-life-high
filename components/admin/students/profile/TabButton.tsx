import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

type Tab = {
  name: string;
  icon: React.ReactNode;
};

interface TabsProps {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  tabs: Tab[];
}

export const TabButton: React.FC<TabsProps> = ({
  activeTab,
  setActiveTab,
  tabs,
}) => {
  return (
    <div className="grid gap-y-2 p-2" role="tablist">
      {tabs.map((tab, index) => {
        const tabPosition = index + 1;
        const isActive = tabPosition == activeTab;
        return (
          <div
            key={tab.name}
            role="tab"
            aria-selected={isActive}
            tabIndex={0}
            onClick={() => setActiveTab(tabPosition)}
            onKeyDown={(e) => e.key === "Enter" && setActiveTab(tabPosition)}
            className={clsx(
              "flex items-center justify-between py-2 px-3 cursor-pointer rounded-xl transition-colors",
              {
                "bg-secondary": isActive,
                "hover:bg-muted": !isActive,
              }
            )}
          >
            <div
              className={clsx(
                "flex items-center gap-x-2 text-sm",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </div>
        );
      })}
    </div>
  );
};
