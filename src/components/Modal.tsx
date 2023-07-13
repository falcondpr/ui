import { motion } from "framer-motion";

interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
  setShow: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ show, setShow, children }) => {
  return (
    <>
      <motion.div
        onClick={() => setShow(false)}
        className="z-10 fixed top-0 left-0 w-screen h-screen bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ ease: "linear", duration: 0.15 }}
        exit={{
          y: 500,
          transition: { duration: 0.1, ease: "linear" },
        }}
        className={`${
          show ? "opacity-100" : "opacity-0"
        } shadow-lg rounded-tl-lg py-5 rounded-tr-lg transition-all fixed left-[6px] w-[calc(100vw_-_12px)] h-[300px] bottom-0 bg-white z-20`}
      >
        {/* header */}
        <div className="pb-3 border-b px-5 border-gray-300">
          <p className="text-center text-gray-900 text-sm">
            Chose a contact to add to Favorites
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex-1" />
            <p className="text-center flex-1 text-lg font-bold">
              Contacts
            </p>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setShow(false)}
                className="text-blue-500 text-right"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* body */}
        <div>{children}</div>
      </motion.div>
    </>
  );
};

export default Modal;
