import imageData from "./components/Data";
import './App.css'
import GallaryFooter from "./components/GallaryFooter";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div>
      <Header />
      <MainBody lake={imageData}/>

      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
