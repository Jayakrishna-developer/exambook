import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import AddBook from "./Pages/AddBook"
import ViewBook from "./Pages/ViewBook";


function App() {


  return (
    <>
      <Routes>
        <Route path={"/"} element={<AddBook />}></Route>
        <Route path={"/view"} element={<ViewBook />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
