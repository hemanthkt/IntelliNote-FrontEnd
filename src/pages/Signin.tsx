import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <div className="h-screen w-screen  bg-gray-300 flex justify-center items-center ">
      <div className="bg-white rounded-xl p-8  min-w-48 grid gap-2">
        <Input refernce={usernameRef} placeholder="Username" />
        <Input refernce={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            variant="primary"
            text="Sign In"
            size="md"
            fullWidth={true}
            loading={false}
            onClick={signin}
          />
        </div>
      </div>
    </div>
  );
}
