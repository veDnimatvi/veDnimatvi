import Image from "next/image";
import React from "react";
import bank from "../../public/img/bank.jpg";
import coffee from "../../public/img/icons-coffeeshop.png";

const Modal = ({ show, setShowModal }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-title">
          <div className="mr-1">Buy Vitamindev a coffee</div>
          <Image src={coffee} alt="coffee" />
        </div>
        <div className="text-lg font-semibold text-center">
          Nguyen Thanh Thien
        </div>
        <div className="text-lg font-semibold text-center">0404 7563 801</div>
        <div className="flex justify-center">
          <Image width={250} height={300} src={bank} alt="bank" />
        </div>

        <div className="flex justify-center">
          <button
            className="px-6 py-2 my-4 text-white bg-red-400 rounded"
            onClick={() => setShowModal(!show)}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
