import { createLazyFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Button>Click me</Button>
      <h1 className="text-red-500">Hello world</h1>
    </div>
  );
}
