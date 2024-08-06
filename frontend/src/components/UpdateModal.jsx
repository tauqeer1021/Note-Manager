import React from 'react'

const UpdateModal = ({title,handleTitleChange,value,handleUpdateNote}) => {
  return (
    <>
        <div
        className="modal fade"
        id="updatemodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputValue"
                  value={value}
                  onChange={handleTitleChange}
                />
                <label htmlFor="floatingInputValue">Enter Your Notes</label>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-dark" onClick={handleUpdateNote}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateModal