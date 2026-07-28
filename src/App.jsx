import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataProvider from "./DataProvider";
import LandingPage from "./LandingPage";
import RegistrationScreen from "./Components-Registration/RegistrationScreen";
import CommonLoginScreen from "./Components-Login/CommonLoginScreen";
import StudentLogin from "./Components-Login/StudentLogin";
import RecruiterLogin from "./Components-Login/RecruiterLogin";
import TrainingCoordinatorLogin from "./Components-Login/TrainingCoordinatorLogin";
import ForgotPassword from "./Components-Login/ForgotPassword";
import PlacementofficerLogin from "./Components-Login/PlacementofficerLogin";
import AdminLogin from "./Components-Login/AdminLogin";
import QuickHeader from "./Components-Placementofficer/PlacementOfficerHeader";
import StatCardsPage from "./Components-Placementofficer/PlacementOfficerStatCards";
import QuickActionsPage from "./Components-Placementofficer/PlacementOfficerQuickActionsPage";
import PlacementOfficerHeader from "./Components-Placementofficer/PlacementOfficerHeader";
import PlacementOfficerStatCards from "./Components-Placementofficer/PlacementOfficerStatCards";
import PlacementOfficerQuickActionsPage from "./Components-Placementofficer/PlacementOfficerQuickActionsPage";
import AdminDashboard from "./Components-Admin/AdminDashboard";

const router = createBrowserRouter([
{
  path: '/PRP_Portal',
  element: <LandingPage/>,
},
{
  path: '/PRP_Portal/Admin',
  element: <AdminLogin/>,
},
{
  path:'/PRP_Portal/UserRegistration',
  element:<RegistrationScreen/>
},
{
  path:'/PRP_Portal/Login',
  element:<CommonLoginScreen/>
},
{
  path:'/PRP_Portal/Login/Student',
  element:<StudentLogin/>
},
// {
//   path:'/PRP_Portal/Login/PlacementOfficer',
//   element:<PlacementofficerLogin/>
// },
{
  path:'/PRP_Portal/Login/Recruiter',
  element:<RecruiterLogin/>
},
{
  path:'/PRP_Portal/Login/TrainingCoordinator',
  element:<TrainingCoordinatorLogin/>
},
{
  path:'/PRP_Portal/Login/Forgotpassword',
  element:<ForgotPassword/>
},


])

function App() {
  return (
    <>
      {/* <PlacementOfficerHeader />
      <PlacementOfficerStatCards />
      <PlacementOfficerQuickActionsPage /> */}
      <AdminDashboard />
      <DataProvider>
        {/* <RouterProvider router={router} /> */}
      </DataProvider>
    
    
    </>
  );
}

export default App;


