import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Chat } from "./pages/Chat";
import { History } from "./pages/History";
import { SlotMachine } from "./pages/SlotMachine";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "chat", Component: Chat },
      { path: "history", Component: History },
      { path: "slot-machine", Component: SlotMachine },
    ],
  },
]);
