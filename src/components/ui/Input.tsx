interface InputProps {
  placeholder: string;
  refernce?: any;
}

export function Input({ placeholder, refernce }: InputProps) {
  return (
    <input
      type={"text"}
      placeholder={placeholder}
      className="rounded px-4 py-2 border"
      ref={refernce}
    />
  );
}
