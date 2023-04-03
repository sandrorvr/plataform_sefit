import './style.css'

function BoxContainer({children, h, w}){
    return (
        <div style={{height:h, width:w}} className="boxContainer">{children}</div>
    );
}

export default BoxContainer;