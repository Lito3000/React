
const InputTodoBox =({Change,Click,TodoBox})=>{

        return (
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input
                            type="text"
                            name='TodoBox'
                            value={TodoBox}
                            required=""
                            className="form-control"
                            placeholder="I am going..."
                            onChange={Change}
                        />
                    </div>
                    <button type="submit" onClick={Click()}
                            className="btn btn-primary">add
                    </button>
                </form>
            </div>
        );
}

export default InputTodoBox