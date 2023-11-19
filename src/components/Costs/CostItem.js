import './CostItem.css'
import CostDate from './CostDate';
import Card from '../UI/Card';
function CostItem(props) {

    return(
        <li>
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item_desctiption'>
                <h2>{props.description}</h2>
            </div>
            <div className='cost-item__price'>${props.amount}</div>
            
            
        </Card>
        </li>
    );
};
export default CostItem;