import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

// Lazy-load detail view to reduce initial bundle size.
const BlogDetail = React.lazy(() => import("./components/BlogDetail"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Suspense shows fallback while lazy chunks load */}
      <Suspense fallback={<div>Loading…</div>}>
        <Routes>
          {/* All routes wrapped in our shared Layout */}
          <Route element={<Layout />}>
            <Route index element={<HomePage />} /> {/* “/” */}
            <Route path="blog/:id" element={<BlogDetail />} />
            {/* “/blog/123” */}
            <Route path="*" element={<Navigate to="/" replace />} />{" "}
            {/* 404 → home */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
