import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});


function Index() {
  return (
    <h1 className="text-red-500">Hello world</h1>
  )
}
