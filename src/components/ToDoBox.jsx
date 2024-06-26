// useState – встроенный в React хук
import React, { useState } from 'react';


const HookComponent = (props) => {
    // Пример хука для работы с состоянием
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('');

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }

    

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input type="text"
                               // value={userName}
                               onChange={handleChange}
                               required=""
                               className="form-control"
                               placeholder="I am going..."/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={} >add</button>
                </form>
            </div>
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm">-</button>
                    </div>
                    <div className="col">{userName}</div>
                </div>
                <hr/>
            </div>
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm">-</button>
                    </div>
                    <div className="col">first</div>
                </div>
                <hr/>
            </div>
        </div>
        // <div>
        //     <div className="mb-3">
        //         <form className="d-flex">
        //             <div className="me-3">
        //                 <input type="text" value="" required="" className="form-control" placeholder="I am going..."/>
        //             </div>
        //             <button type="submit" className="btn btn-primary">add</button>
        //         </form>
        //     </div>
        // </div>

        // <div>
        //     <p>Вы нажали {count} раз(а)</p>
        //     <button onClick={handleClick}>
        //         Нажми меня
        //     </button>
        //     <hr/>
        //     <div>User Name: {userName}</div>
        //     <input type="text" value={userName} onChange={handleChange}/>
        // </div>
    );
};

export default HookComponent;