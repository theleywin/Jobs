import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";


const router= createBrowserRouter(
    createRoutesFromElements(<Route index element={<h1>MyApp</h1>}/>)
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;