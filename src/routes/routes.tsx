import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import MainPage from "../pages/main/main.page";
import SignInComponent from "../pages/main/components/login/sign-in/sign-in.component";
import RequireAuthRoute from "../hoc/RequireAuthRoute";
import DashboardPage from "../pages/dashboard/dashboard.page";
import TrainerComponent from "../pages/dashboard/components/trainer/trainer.component";
import InfoComponent from "../pages/dashboard/components/info/info.component";
import AdminComponent from "../pages/dashboard/components/admin/admin.component";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="main" element={<MainPage />}>
        <Route path="auth" element={<SignInComponent />} />
      </Route>
      <Route element={<RequireAuthRoute />}>
        <Route path="dashboard" element={<DashboardPage />}>
          <Route index element={<InfoComponent />} />
          <Route path="info" element={<InfoComponent />} />
          <Route path="trainer" element={<TrainerComponent />} />
          <Route path="admin" element={<AdminComponent />} />
          <Route path="*" element={<Navigate to="page-not-found" replace />} />
        </Route>
      </Route>
    </Route>
    {/* //! Default Redirect */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RoutesComponent;
