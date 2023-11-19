import './CostForm.css';
import React, {useState} from 'react';

const CostForm = (props)=>{

    const [name, setName] = useState('');
    const [sum, setSum]= useState('');
    const [data, setData]= useState('');


    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    }
    const sumChangeHandler = (event) =>{
        setSum(event.target.value);
    }
    const dataChangeHandler = (event) =>{
        setData(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const costData = {
            description:name,
            amount: sum,
            date: new Date(data),
        }
        props.onSaveCostData(costData);
        setName('');
        setSum('');
        setData('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label className=''>Название</label>
                <input type='text' value={name} onChange={nameChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label className=''>Сумма</label>
                <input type='number' min='0.01' step='0.01' value={sum} onChange={sumChangeHandler}/>
            </div>
            <div className='new-cost__control'>
                <label className=''>Дата</label>
                <input type='date' min='2019-01-01' step='0.01' value={data} onChange={dataChangeHandler}/>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                    <button type="button" onClick={props.onCancle}>Отмена</button>
                </div>
            </div>
            </div>
        </form>
    )
}
export default CostForm;