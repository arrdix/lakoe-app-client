import { FieldError, PathValue, UseFormSetValue } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues, Path } from "react-hook-form";

interface ValidatedSelecttProps<T extends FieldValues> {
  error: FieldError | undefined;
  setValue: UseFormSetValue<T>;
  name: Path<T>;
  placeholder?: string;
  options: string[];
}

function ValidatedSelect<T extends FieldValues>(
  props: ValidatedSelecttProps<T>
) {
  const { name, setValue, error, placeholder, options } = props;

  return (
    <div>
      <Select
        onValueChange={(value) => {
          setValue(name, value as PathValue<T, Path<T>>);
        }}
      >
        <SelectTrigger className="w-full ml-auto">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <span className="text-error">{error.message}</span>}
    </div>
  );
}

export default ValidatedSelect;
