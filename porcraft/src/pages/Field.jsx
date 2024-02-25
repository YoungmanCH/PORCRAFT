import React ,{useState} from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import EditorCanvas from '../components/Editor/EditorCanvas';



const Field = () => {
    const [selectedField,setSelectedField]=useState([]);
    const navigate = useNavigate();

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
      <img src="./src/images/land1.png" className="w-3/4 h-fit" />
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
      <img src="./src/images/land1.png" className="w-3/4 h-fit" />
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