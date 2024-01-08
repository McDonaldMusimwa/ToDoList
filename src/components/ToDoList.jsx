
import ToDoItem from './toDoItem';
import PropTypes from 'prop-types';

const ToDoList = ({items,deleteItem,checkToDoStatus}) => {
    return (
        <>
            <h1 className='header'>To Do List</h1>
            <ul className='list'>
                {items.length === 0 && "Empty tasks"}
                {items.map((item) => {
                    return <ToDoItem key={item.id} item={item} delete={deleteItem} check={checkToDoStatus} />
                })}

            </ul>
        </>
    )
}

const itemShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
});


ToDoList.propTypes = {
    items: PropTypes.arrayOf(itemShape),
    deleteItem: PropTypes.func,
    checkToDoStatus: PropTypes.func
}
export default ToDoList