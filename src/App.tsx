import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import MainPage from "./pages/main/main.page";
import './App.css';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
