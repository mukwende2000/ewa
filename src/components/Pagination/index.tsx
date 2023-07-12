import { SetStateAction } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

function index({ setPage, page, totalPages }: Props) {
  return (
    <div className="border-white border-2 rounded-md w-96 mx-auto flex items-center justify-center my-10">
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page < 2}
        className={`basis-full py-2 text-white ${
          page < 2 ? null : "hover:text-black hover:bg-white"
        } flex justify-center items-center gap-2`}
      >
        <FaArrowLeft />
        <span>Prev</span>
      </button>
      <p className="p-2 bg-white basis-full">
        Page {page} of {totalPages}
      </p>
      <button
        disabled={page === totalPages}
        onClick={() => setPage((prev) => prev + 1)}
        className={`basis-full py-2 text-white  ${
          page === totalPages ? null : "hover:text-black hover:bg-white"
        } flex justify-center items-center gap-2`}
      >
        <span>Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default index;
