import PropTypes from 'prop-types';

const ToDoItem = (props) => {
    const item = {
        id:props.item.id,
        title:props.item.title,
        check:props.check,
        delete:props.delete
    }
    return (
        <li key={item.id}>
            <label>
                <input type='checkbox' onChange={e => item.check(item.id, e.target.checked)} />
                {item ? item.title : null}
            </label>
            <button onClick={() => item.delete(item.id)} className='btn btn-danger'>Delete</button>
        </li>
    )
}

ToDoItem.propTypes = { 
    item:PropTypes.object,
    id:PropTypes.string,
    check:PropTypes.func,
    delete:PropTypes.func,
    


}

export default ToDoItem