import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateComponent } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "./hooks";

export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return (
    <>
      <div>
        <Sidebar />
      </div>

      <div className="p-4 ml-72 bg-gray-100 min-h-screen">
        <CreateComponent
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
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
            onClick={() => {
              setModalOpen(true);
            }}
            text="Add Content"
            size="sm"
            startIcon={<PlusIcon size="md" />}
          />
        </div>

        <div className="flex gap-4">
          {contents?.map(({ title, type, link }) => (
            <Card key={title} link={link} title={title} type={type} />
          ))}

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
