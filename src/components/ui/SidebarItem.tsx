import { ReactElement } from "react";

export function Sidebaritem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex gap-2 pt-4">
      <div className="text-gray-700">{icon}</div> {text}
    </div>
  );
}
