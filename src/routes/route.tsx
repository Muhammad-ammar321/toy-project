import QuizApp from "../pages/quiz/quiz";
import StepperApp from "../pages/stepper/stepper";
import TodoApp from "../pages/todoList/todo";

import { createBrowserRouter } from "react-router";

export const MainRoutes = createBrowserRouter([
    {
        path:'todolist',
        element:<TodoApp/>
    },
    {
        path:'quiz',
        element:<QuizApp/>
    },
    {
        path:'stepper',
        element:<StepperApp/>
    },
])