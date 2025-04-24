export function Input({
  onChange,
  placeholder,
}: {
  placeholder: string;
  onChange: () => void;
}) {
  return (
    <input
      type={"text"}
      placeholder={placeholder}
      className="rounded px-4 py-2 border"
      onChange={onChange}
    />
  );
}
