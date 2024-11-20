"use client";

import { SelectNative } from "@/components/ui/select-native";

type SortFilterProps = {
  label: string;
  options: { value: string; label: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  defaultValue?: string;
};

const SortFilter: React.FC<SortFilterProps> = ({
  label,
  options,
  placeholder,
  onChange,
  defaultValue = "all",
}) => (
  <>
    <div className="relative rounded-xl border border-input bg-background/50 bg-opacity-50 backdrop-blur-md shadow-sm shadow-black/5 ring-offset-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 [&:has(select:is(:disabled))_*]:pointer-events-none">
      <label
        htmlFor="select-14"
        className="block px-3 pt-2 text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      <SelectNative
        id="select-14"
        onChange={(event) => onChange(event.target.value)}
        defaultValue={defaultValue}
        className="border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectNative>
    </div>
  </>
);

export default SortFilter;
