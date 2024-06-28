const InputTodoBox = (init) => {
    return (
        <div className="mb-3">
            <form className="d-flex">
                <div className="me-3">
                    <input
                        type="text"
                        name='TodoBox'
                        value={init.value}
                        required=""
                        className="form-control"
                        placeholder="I am going..."
                        onChange={init.Change}
                    />
                </div>
                <button type="submit" onClick={init.Click()}
                        className="btn btn-primary">add
                </button>
            </form>
        </div>
    );
}

export default InputTodoBox