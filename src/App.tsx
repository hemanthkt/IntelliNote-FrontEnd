import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
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

      <Card />
    </>
  );
}

export default App;
