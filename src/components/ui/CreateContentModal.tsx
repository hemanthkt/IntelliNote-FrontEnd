import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateComponent({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [types, setTypes] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type: types,
      },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500/60	 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center ">
              <span className="bg-white opacity-100 p-4 rounded-md">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <CrossIcon />
                </div>
                <div className="flex flex-col gap-2">
                  <Input refernce={titleRef} placeholder={"Title"} />
                  <Input refernce={linkRef} placeholder={"Link"} />
                  <div>
                    <h1 className="font-bold">Select your Type:</h1>
                  </div>
                  <div className="flex justify-center gap-1 p-4">
                    <Button
                      onClick={() => {
                        setTypes(ContentType.Youtube);
                      }}
                      variant={
                        types === ContentType.Youtube ? "primary" : "secondary"
                      }
                      fullWidth={false}
                      size="md"
                      text="Youtube"
                    />
                    <Button
                      onClick={() => {
                        setTypes(ContentType.Twitter);
                      }}
                      variant={
                        types === ContentType.Twitter ? "primary" : "secondary"
                      }
                      fullWidth={false}
                      size="md"
                      text="Twitter"
                    />
                  </div>

                  <Button
                    onClick={addContent}
                    variant="primary"
                    text="Submit"
                    size="sm"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
