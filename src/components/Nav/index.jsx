import './style.css'



/*  Добавляем ссылки */
import {Link} from "react-router-dom";
// import {getInvoices} from "../data/Data";

const Nav = () => {
    // let invoices = getInvoices();
    return <div className="container">
        <div className="row">
            <div className="col-4">
                <form id="todoForm">
                    <div className="mb-3">
                        <label className="form-label">Task title</label>
                        <input type="text" name="title" className="form-control" placeholder="Title" required=""/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Task body</label>
                        <textarea name="description" className="form-control" placeholder="Task body" cols="30"
                                  rows="10" required=""></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="submit" className="btn btn-primary" value="Create Task!"/>
                            <input type="reset" value="Очистить" className="btn btn-warning"/>
                        </div>
                        <button type="button" className="btn btn-danger remove-all">Удалить все</button>
                    </div>
                </form>
            </div>

            <div className="col-8">
                <div className="row" id="todoItems">

                    {/*// <!--                    <div class="col-4">-->*/}
                    {/*// <!--                        <div class="taskWrapper">-->*/}
                    {/*// <!--                            <div class="taskHeading">Title</div>-->*/}
                    {/*// <!--                            <div class="taskDescription">Task body</div>-->*/}
                    {/*// <!--                            <hr>-->*/}
                    {/*// <!--                            <label class="completed form-check">-->*/}
                    {/*// <!--                                <input type="checkbox" class="form-check-input">-->*/}
                    {/*// <!--                                <span>Завершено ?</span>-->*/}
                    {/*// <!--                            </label>-->*/}
                    {/*// <!--                            <hr>-->*/}
                    {/*// <!--                            <button class="btn btn-danger delete-btn">Удалить</button>-->*/}
                    {/*// <!--                        </div>-->*/}
                    {/*// <!--                    </div>-->*/}
                </div>
            </div>
        </div>
    </div>
    // return <div>
    //     <nav className='navigation-example'>
    //         <Link to="/">Home Page</Link>
    //         <div className="mb-3">
    //             <form className="d-flex">
    //                 <div className="me-3">
    //                     <input
    //                         type="text"
    //                         name='TodoBox'
    //                         // value={init.value}
    //                         required=""
    //                         className="form-control"
    //                         placeholder="I am going..."
    //                         // onChange={init.Change}
    //                     />
    //                 </div>
    //                 <button type="submit"
    //                         // onClick={init.Click}
    //                         className="btn btn-primary">add
    //                 </button>
    //             </form>
    //         </div>
    //     </nav>
    // </div>
}
export default Nav;