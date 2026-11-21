import './Box.css'

function Box ({isActive ,toggle}){
    return(
        <div
        onClick={toggle}
        className="Box" 
        style={{background: isActive ? 'red' : 'black'}}
        ></div>
    )
}

export default Box


