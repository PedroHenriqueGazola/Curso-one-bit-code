import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PlanetsScreen from "./Screens/planets";
import PlanetScreen from "./Screens/planet";
 
 
const Rotas = () =>(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PlanetsScreen />} />
        <Route path='/:id' element={<PlanetScreen />} />
      </Routes>
    </BrowserRouter>
  );
;
 
export default Rotas;