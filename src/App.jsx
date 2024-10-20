import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";


const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>

          <Route index element={<HomePage/>}/>
            <Route path="/jobs" element={<JobsPage/>}/>

        </Route>

    )
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;