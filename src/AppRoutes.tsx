import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotesPage from "./pages/NotesPage";
import ToolsPage from "./pages/ToolsPage";
import LeaderboardsPage from "./pages/LeaderboardsPage";

// Lazy-load detail view to reduce initial bundle size.
const BlogPage = React.lazy(() => import("./pages/BlogPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* Suspense shows fallback while lazy chunks load */}
      <Suspense fallback={<div>Loading…</div>}>
        <Routes>
          {/* All routes wrapped in our shared Layout */}
          <Route element={<Layout />}>
            <Route index element={<HomePage />} /> {/* “/” */}
            <Route path="blog/:id" element={<BlogPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="notes" element={<NotesPage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="leaderboards" element={<LeaderboardsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />{" "}
            {/* Redirect 404 → home */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
