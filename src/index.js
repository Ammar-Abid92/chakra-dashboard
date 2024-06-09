import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import AuthLayout from "layouts/Auth";
import AdminLayout from "./layouts/Admin";
import theme from "theme/theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme} resetCss={false}>
    <HashRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </HashRouter>
  </ChakraProvider>
);
