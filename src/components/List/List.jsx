import './List.scss';

const List = (props) => {
    const { listItems, handleDelete} = props;
    const handleCheckBox = (event)=>{
        const id = event.target.id;
        document.getElementById(id).style.setProperty('text-decoration','line-through');
    };
    const handleStrike = (event)=>{
        event.target.style.setProperty('text-decoration','line-through');
    }
    const displayList = listItems.map((item) => {
        return (
            <li>
                {/*<input type="checkbox" id={item} onClick={handleCheckBox}></input>*/}
                <button id={item} onClick={handleStrike} class="list-item">{item}</button>
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