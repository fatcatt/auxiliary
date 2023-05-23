import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Head/index.tsx"
import DeskIndex from "./pages/Desk/Index/index.tsx";
import DeskPlay from './pages/Desk/VideoPlay/index.tsx'
import MobileIndex from "./pages/Mobile/Index/index.tsx";
import MobilePlay from './pages/Mobile/VideoPlay/index.tsx'
import { isMobileOnly } from 'react-device-detect';

function App() {
  console.log(isMobileOnly)
  return (
    <BrowserRouter >
      <Header></Header>
      <Routes>
        <Route path="/home" element={isMobileOnly? <MobileIndex/>: <DeskIndex/>} />
        <Route path="/Play" element={isMobileOnly? <MobilePlay/>: <DeskPlay/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;