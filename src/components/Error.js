import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center absolute top-1/3 right-0 left-0">
      <div className="bg-black text-white rounded-md bg-opacity-100 shadow-md border-8 border-red-800">
        <h1 className="text-3xl font-bold p-4 text-center">Oops!😒</h1>
        <h2 className="text-xl p-4">Operation can not be completed at the moment!.</h2>
        <Link to="/">
        <button className="font-bold bg-red-800 w-full mt-6 py-3">👈Back to home</button>
        </Link>
      </div>
    </div>
  );
};
export default Error;
