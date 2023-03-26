import './style.css'

function ModalForm(){
    return (
        <form action="" method="post">
            <label htmlFor="Area"></label>
            <input type="text" id="Area"/>
            <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label htmlFor="vehicle1"> I have a bike</label><br/>
            </div>
            <div>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike"/>
                <label htmlFor="vehicle2"> I have a bike</label><br/>
            </div>
            <div>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Bike"/>
                <label htmlFor="vehicle3"> I have a bike</label><br/>
            </div>
        </form>
    );
}

export default ModalForm