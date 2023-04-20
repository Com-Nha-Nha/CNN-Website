import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ModalNotify({showModal, setShowModal}) {
 

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
   

      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đăng kí thành công</h5>
                
              </div>
              <div className="modal-body">Bạn đã đăng kí tài khoản thành công tại Cơm Nhà Nha</div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Đóng
                </button>  */}
                <Link type="button" className="btn btn-primary" to="/log-in">
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalNotify;
