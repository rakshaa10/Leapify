import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import OpportunityDetailsPage from "./pages/OpportunityDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BookmarksPage from "./pages/BookmarksPage";
import DashboardPage from "./pages/DashboardPage";
import CreateOpportunityPage from "./pages/CreateOpportunityPage";

import ProtectedRoute from "./components/ProtectedRoute";
import OrganizerRoute from "./components/OrganizerRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/opportunity/:id" element={<OpportunityDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <BookmarksPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <OrganizerRoute>
              <DashboardPage />
            </OrganizerRoute>
          }
        />

        <Route
          path="/create-opportunity"
          element={
            <OrganizerRoute>
              <CreateOpportunityPage />
            </OrganizerRoute>
          }
        />

        <Route
          path="/edit-opportunity/:id"
          element={
            <OrganizerRoute>
              <CreateOpportunityPage />
            </OrganizerRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
