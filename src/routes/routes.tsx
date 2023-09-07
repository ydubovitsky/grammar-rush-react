import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/main/main.layout";
import MainPage from "../pages/main/main.page";
import SignInComponent from "../pages/main/components/login/sign-in/sign-in.component";
import RequireAuthRoute from "../hoc/RequireAuthRoute";
import InfoComponent from "../pages/dashboard/info/info.component";
import AdminComponent from "../pages/dashboard/admin/admin.component";
import FaqPage from "../pages/faq/faq.page";
import PrivacyPolicyPage from "../pages/privacy-policy/privacy-policy.page";
import TermOfUsePage from "../pages/term-of-use/term-of-use.page";
import TimesComponent from "../pages/dashboard/times/times.compoent";
import NotFoundPage from "../pages/not-found/not-found.page";
import GratitudePage from "../pages/gratitude/gratitude.page";
import ArticlesPage from "../pages/dashboard/articles/articles.page";
import ArticleItemComponent from "../pages/dashboard/articles/components/article-item/article-item.component";
import ApplicationPage from "../pages/application/application.component";
import DashboardLayout from "../layouts/dashboard/dashboard.layout";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path="main" element={<MainPage />}>
        <Route path="auth" element={<SignInComponent />} />
      </Route>
      <Route path="faq" element={<FaqPage />} />
      <Route path="application" element={<ApplicationPage />} />
      <Route path="gratitude" element={<GratitudePage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="term-of-use" element={<TermOfUsePage />} />
      <Route path="page-not-found" element={<NotFoundPage />} />
      {/* <Route path="*" element={<Navigate to="page-not-found" replace />} /> */}
    </Route>
    <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index element={<InfoComponent />} />
      <Route path="info" element={<InfoComponent />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="articles/:id" element={<ArticleItemComponent />} />
      <Route path="tenses" element={<TimesComponent />}>
        <Route path=":id" element={<TimesComponent />} />
      </Route>
      <Route element={<RequireAuthRoute />}>
        <Route path="admin" element={<AdminComponent />} />
      </Route>
      <Route path="*" element={<Navigate to="info" replace />} />
    </Route>
    {/* //! Default Redirect */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default RoutesComponent;
