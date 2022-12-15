export default function Note(props){

    return (
        <div className='note' style={{backgroundColor : props.colour}}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}