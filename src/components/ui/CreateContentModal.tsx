import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateComponent({ open, onClose }) {
  return (
    <div>
      <div className="">
        {open && (
          <div className="w-screen h-screen bg-slate-500 opacity-60	 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center ">
              <span className="bg-white opacity-100 p-4 rounded-md">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
                <div className="flex flex-col gap-2">
                  <Input placeholder={"Title"} />
                  <Input placeholder={"Link"} />
                  <Button variant="primary" text="Submit" size="sm" />
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
