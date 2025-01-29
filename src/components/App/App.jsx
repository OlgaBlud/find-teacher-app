import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage";
import TeachersPage from "../../pages/TeachersPage/TeachersPage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
