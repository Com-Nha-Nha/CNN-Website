import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ModalRemindLogin({showModal, setShowModal}) {
 

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
   

      {showModal && (
        <div className="modal modal-backdrop " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bạn chưa đăng nhập</h5>
                
              </div>
              <div className="modal-body">Vui lòng đăng nhập để lưu thông tin dinh dưỡng</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Đóng
                </button> 
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

export default ModalRemindLogin;
