import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-end gap-4  ">
          <Button
            variant="secondary"
            onClick={() => {}}
            text="Share"
            size="sm"
            startIcon={<ShareIcon size="md" />}
          />
          <Button
            variant="primary"
            onClick={() => {}}
            text="Add Content"
            size="sm"
            startIcon={<PlusIcon size="md" />}
          />
        </div>

        <div className="flex gap-4">
          <Card
            link="https://x.com/hemanthkt_/status/1914784005083570647"
            title="Tweet"
            type="twitter"
          />
          <Card
            link="https://www.youtube.com/watch?v=Co3jhNSkUK8"
            title="Youtube video"
            type="youtube"
          />
        </div>
      </div>
    </>
  );
}

export default App;
