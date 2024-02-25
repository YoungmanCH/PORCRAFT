import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import { About, Editor, Field, Home, ModelsLibrary, Preview } from "./pages";
import Howto from "./pages/Howto";
import Sample from "./pages/Sample";

// LocationProvider コンポーネントを作成して、location を子コンポーネントで利用可能にします。
const LocationProvider = ({ children }) => {
  const location = useLocation();
  return children(location);
};

const App = () => {
  return (
    <Router>
      {/* LocationProvider コンポーネントを使用して、
      現在の location に基づいて Navbar の表示を制御します。*/}
      <LocationProvider>
        {(location) => (
          <main className="bg-slate-300/20 h-full">
            {location.pathname !== "/editor" && <Navbar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/field" element={<Field />} />
              <Route path="/howto" element={<Howto />}/>
              <Route path="/preview" element={<Preview />} />
              <Route path="/sample" element={<Sample />}/>
              <Route path="/modelsLibrary" element={<ModelsLibrary />} />
            </Routes>
          </main>
        )}
      </LocationProvider>
    </Router>
  );
};

export default App;
