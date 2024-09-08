import React from "react";

const CustomPopup = ({ isOpen, onClose, onConfirm }) => {
    return (
      <>
{isOpen && (
        <div className="popup-overlay fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="popup-content bg-black text-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold mb-4">Are you sure you want to log out?</p>
            <div className="popup-buttons flex justify-center mt-4">
              <button className="mx-2 px-4 py-2 rounded-md bg-indigo-500 text-white" onClick={onClose}>
                Cancel
              </button>
              <button className="mx-2 px-4 py-2 rounded-md bg-indigo-500 text-white" onClick={onConfirm}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      </>
    );
  };

  export default CustomPopup;