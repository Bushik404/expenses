import './NewCost.css'
import CostForm from './CostForm';
import React,{useState} from 'react';
const NewCost = (props) =>{

    const [isFormVisible, setisFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData)=>{
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        };
        props.onAddCost(costData)
        setisFormVisible(false)
    };

    const inputCostDataHandler = () =>{
        setisFormVisible(true);
    }
    const cancleCostHandler = () =>{
        setisFormVisible(false)
    }

    return(
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить расход</button>}
            {isFormVisible &&<CostForm onCancle={cancleCostHandler} onSaveCostData={saveCostDataHandler}/>}
        </div>
    )
}

export default NewCost;