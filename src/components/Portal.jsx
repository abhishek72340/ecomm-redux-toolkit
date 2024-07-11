import { useState } from "react";
import Modal from "./Modal";

const Portal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 ">
      <button
        className="border border-green-300 p-2 bg-green-300 "
        onClick={() => setIsModalOpen(true)}
      >
        proceed to checkout
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form>
          <div className="grid grid-cols-2 gap-4 p-3 m-3">
            <input
              type="text"
              placeholder="name"
              className="border border-green-300 outline-none  w-full p-1"
            />
            <input
              type="text"
              placeholder="mobile"
              className="border border-green-300 outline-none w-full p-1 "
            />
            <input
              type="text"
              placeholder="pin"
              className="border border-green-300 outline-none  w-full p-1"
            />
            <input
              type="text"
              placeholder="address"
              className="border border-green-300 outline-none  w-full p-1"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-300 p-2 ">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Portal;
