const Modal = ({ data, modalRef}) => {

  return (
    <div className="modal" ref={modalRef}>
      <p>
        <span className="key">Country:</span>
        <span className="value">{data.country}</span>
      </p>
      <p>
        <span className="key">City:</span>
        <span className="value">{data.city}</span>
      </p>
      <p>
        <span className="key">User:</span>
        <span className="value">{data.user}</span>
      </p>
    </div>
  );
};

export default Modal;
