import { MovieList } from "../components/MoviesList";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { useCollection } from "../hooks/useCollection";
import {doc, deleteDoc} from 'firebase/firestore'
// React Icons Import
import { FaArrowRight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
function Home() {
  const {documents: cards, error} = useCollection("cards")


  const [nameMovie, setNameMovie] = useState("Ronaldo");
  const [newMovie, setNewMovie] = useState("");
  const { data, isPending } = useFetch(
    `https://www.omdbapi.com/?s=${nameMovie}&apikey=bb1151cd`
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameMovie === "") {
      setNameMovie('Man')
    } else {
      setNameMovie(newMovie);
    }
  };
  if (isPending === true) {
    return <Loader />;
  }
  return (
    <div className=" dark:text-white">
      <div className="cite-container">
        <div className="form-wrapper mt-[40px] flex items-center justify-between">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input
              onChange={(e) => setNewMovie(e.target.value)}
              type="text"
              placeholder="Type here every thing ✍"
              className="input input-warning dark:bg-inherit w-[350px] h-[60px] text-xl"
            />
            <button className="btn h-[60px] w-[100px] btn-warning text-[17px]">
              {" "}
              Search
            </button>
          </form>
          <div className="flex gap-4">
            <button className="btn btn-warning text-[18px] h-[50px] w-[140px]">
              Log Out <FaArrowRight/>
            </button>
            <button className="btn btn-warning text-[18px] h-[50px] w-[190px]">
              Delete Account <MdDelete/>
            </button>
          </div>
        </div>

        <h1 className="mx-auto rounded-3xl border-yellow-500 w-[280px] h-[70px] border-2 py-3 text-center mt-[30px] mb-[35px] font-semibold text-4xl hover:bg-yellow-300 hover:border-stone-500 cursor-pointer  transition-all dark:hover:text-black">
          Movies 📽
        </h1>
        <MovieList data={data && data.Search} />
      </div>
    </div>
  );
}

export default Home;
