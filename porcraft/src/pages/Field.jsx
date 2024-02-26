import React ,{Suspense ,useState} from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import EditorCanvas from '../components/Editor/EditorCanvas';
import { Canvas } from '@react-three/fiber';
import adjustIslandForFieldSize from '../features/AdjustFieldSize/AdjustIslandForField';
import adjustChessForFieldSize from '../features/AdjustFieldSize/AdjustChessForField';
import adjustPizzaForFieldSize from '../features/AdjustFieldSize/AdjustPizzaForField';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Chess from '../models/Chess';
import Pizza from '../models/Pizza';
import { OrbitControls } from '@react-three/drei';

const Field = () => {
    const [selectedField,setSelectedField]=useState([]);
    const [islandScale, islandPosition] = adjustIslandForFieldSize();
    const [chessScale,chessPosition]=adjustChessForFieldSize();
    const [pizzaScale,pizzaPosition]=adjustPizzaForFieldSize();

    const CheckboxClick = (fieldName)=>{
        if(selectedField.includes(fieldName)){
            setSelectedField(selectedField.filter((field)=>field!==fieldName));
        }else{
            setSelectedField([...selectedField,fieldName]);
        }
        
    };

  
      const isLinkVisible = selectedField.length === 1;
    return (
    <section className="w-full h-screen overflow-hidden bg-white">
  <div className="w-full h-20"></div>
  <div className="grid grid-cols-2 gap-4 place-content-stretch h-">
    {/* 1つ目のセクション */}
    <div className="flex flex-col items-center justify-center mx-2 my-4">
      <div className="flex">
        <input 
        type="checkbox"
        className="m-2"
        onChange={()=>CheckboxClick('island')}
        />
      <div className="m-2">Island</div>
    </div>
    <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Island scale={islandScale} position={islandPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
    </div>

    {/* 2つ目のセクション */}
    <div className="flex flex-col items-center justify-center mx-2 my-4">
    <div className="flex">
        <input 
        type="checkbox"
        className="m-2"
        onChange={()=>CheckboxClick('chess')}
        />
      <div className="m-2">chess</div>
    </div>
    <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Chess scale={chessScale} position={chessPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
    </div>
    
    {/* 3つ目のセクション */}
    <div className="flex flex-col items-center justify-center mx-2 my-4">
    <div className="flex">
        <input 
        type="checkbox"
        className="m-2"
        onChange={()=>CheckboxClick('chess')}
        />
      <div className="m-2">pizza</div>
    </div>
    <Canvas className="canvas-container">
            <Suspense fallback={<Loader />}>
              <directionalLight position={[-1, 1, 1]} intensity={2} />
              <ambientLight intensity={3} />
              <hemisphereLight intensity={5} />

              <Pizza scale={pizzaScale} position={pizzaPosition} />
            </Suspense>
            <OrbitControls />
          </Canvas>
    </div>
    
  </div>
  <hr/>
  <div className="flex flex-col items-center">
        {isLinkVisible && (
          <div className="flex">
            <Link to="/editor" className="btn pading-all-20px">
              Get started!
            </Link>
          </div>
        )}

        <hr />
      </div>
    </section>

  );
};

export default Field;