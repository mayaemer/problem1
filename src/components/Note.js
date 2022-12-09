export default function Note({title, body, colour}){
    


    return (
        <div className='note' style={{backgroundColor : colour}}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}