import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Head/index.tsx"
import Footer from "./components/Footer/index.tsx"
import DeskIndex from "./pages/Desk/Index/index.tsx";
import DeskPlay from './pages/Desk/VideoPlay/index.tsx'
import MobileIndex from "./pages/Mobile/Index/index.tsx";
import MobilePlay from './pages/Mobile/VideoPlay/index.tsx'
import { isMobileOnly } from 'react-device-detect';
import { List, Space } from 'antd';
import { Star, Wechat } from '@icon-park/react';


function App() {
  console.log(isMobileOnly)
  return (
    <BrowserRouter >
      <Header></Header>
      <Routes>
        <Route path="/home" element={isMobileOnly? <MobileIndex/>: <DeskIndex/>} />
        <Route path="/Play" element={isMobileOnly? <MobilePlay/>: <DeskPlay/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;