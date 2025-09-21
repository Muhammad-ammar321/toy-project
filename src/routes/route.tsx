import Home from "../pages/homePage/homePage";
import QuizApp from "../pages/quiz/quiz";
import StepperApp from "./stepperRoute/step";
import TodoApp from "../pages/todoList/todo";
import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/layout"; // path where you saved Layout

export const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // wrap with Layout
    children: [
      {
        index: true, // default child
        element: <Home />,
      },
      {
        path: "todolist",
        element: <TodoApp />,
      },
      {
        path: "quiz",
        element: <QuizApp />,
      },
      {
        path: "stepper",
        element: <StepperApp />,
      },
    ],
  },
]);
