import './style.css'

function Modal({isOpen, controllerMoldal, children}){
    if(isOpen){
        return (
            <div id="fade">
                <div id="modal">
                    <div className="modal-header">
                        <h1>Titulo</h1>
                        <button className="modal-btn-close" onClick={controllerMoldal}>x</button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    
}

export default Modal