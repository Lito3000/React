import Title from "./Title.jsx";

const Header = (props) =>

    <div className="modal-header">
      <Title/>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
    </div>
;

export default Header;