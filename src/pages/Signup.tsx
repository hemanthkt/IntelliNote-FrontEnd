import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function Signup() {
  return (
    <div className="h-screen w-screen  bg-gray-300 flex justify-center items-center ">
      <div className="bg-white rounded-xl p-8  min-w-48 grid gap-2">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            variant="primary"
            text="Sign Up"
            size="md"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}
