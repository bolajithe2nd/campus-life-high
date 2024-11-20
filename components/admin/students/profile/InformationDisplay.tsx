import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface SectionItem {
  label: string;
  value: string | React.ReactNode;
}

interface Section {
  title: string;
  description?: string;
  items: SectionItem[];
}

interface InformationDisplayProps {
  sections: Section[];
}

const InformationDisplay: React.FC<InformationDisplayProps> = ({
  sections,
}) => {
  const hasData = sections.some(
    (section) => section.items && section.items.length > 0
  );

  return (
    <div className="grid grid-rows-1 min-h-[94vh] overflow-y-scroll motion-preset-blur-right lg:p-2 lg:border-l lg:border-l-secondary">
      <div className="grid h-full content-start gap-y-16 bg-background rounded-xl p-6">
        {hasData ? (
          sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="grid gap-y-6">
              {/* Section Header */}
              <DialogHeader>
                <DialogTitle>{section.title}</DialogTitle>
                <DialogDescription>{section.description}</DialogDescription>
              </DialogHeader>

              {/* Section Items */}
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="grid gap-y-1">
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm bg-container px-3 py-2 rounded-lg text-foreground">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-lg font-semibold text-muted-foreground">
              No Information Available
            </p>
            <p className="text-sm text-muted-foreground">
              There is no client information to display at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationDisplay;
