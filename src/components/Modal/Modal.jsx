import "./Modal.scss";

const Modal = ({ children, hideModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-box">
          <div className="modal-header">
            <div className="header-left">
              <span onClick={() => hideModal(false)}>x</span>
            </div>
            <div className="header-right"></div>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
