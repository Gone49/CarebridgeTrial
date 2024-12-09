// TextInput.tsx
import { UseFormRegister } from "react-hook-form";
import { LoginInputProps } from "@/type/types"; // Ensure correct path

// Define the props for TextInput component
interface TextInputProps {
  id: keyof LoginInputProps; // `id` must match the keys of LoginInputProps
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<LoginInputProps>; // Ensure correct typing for register
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  type,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium text-sm mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...register(id, { required: `${label} is required` })}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;
