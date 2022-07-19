import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PlanetsScreen from "./Screens/planets";
import PlanetScreen from "./Screens/planet";
import NotFoundScreen from "./Screens/notFound";
 
 
const Rotas = () =>(
    <BrowserRouter>
      <Routes>
        <Route path='/:id' element={<PlanetScreen />} />
        <Route path='/' element={<PlanetsScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
;
 
export default Rotas;