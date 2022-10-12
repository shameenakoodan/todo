import './List.scss';

const List = (props) => {
    const { listItems, handleDelete} = props;
    
    const handleStrike = (event)=>{
        event.target.style.setProperty('text-decoration','line-through');
    }
    const displayList = listItems.map((item) => {
        return (
            <li key = {item}>
                {/*<input type="checkbox" id={item} onClick={handleCheckBox}></input>*/}
                <button id={item} onClick={handleStrike} className="list-item">{item}</button>
                <button onClick={handleDelete} id={item}>-</button>
            </li>
        )
    });
    return (
        <>
            <ul>{displayList}</ul>
        </>
    )
}
export default List;