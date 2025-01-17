import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

import { TanStackQueryDevtools } from "../components/devtools/TanstackQueryDevtools";
import { TanStackRouterDevtools } from "../components/devtools/TanstackRouterDevTools";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen flex-col">
      {/*<div className="p-2 flex gap-2">*/}
      {/*  <Link to="/" className="[&.active]:font-bold">*/}
      {/*    Home*/}
      {/*  </Link>{' '}*/}
      {/*  <Link to="/about" className="[&.active]:font-bold">*/}
      {/*    About*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<hr />*/}
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <Suspense>
        <TanStackQueryDevtools />
      </Suspense>
    </div>
  ),
});
