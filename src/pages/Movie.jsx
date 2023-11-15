import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function Movie() {
  const { imdbID } = useParams();
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=2b8d4e56`;
  const { data, isPending, error } = useFetch(url);
  if (data === null) {
    return <Loader/>
  }
  const {
    BoxOffice,
    Actors,
    imdbID: ID,
    Awards,
    Title,
    Country,
    Rated,
    Released,
    Genre,
    Language,
    Year,
    Director,
    Writer,
    Poster,
    Runtime,
    Type,
  } = data;

  return (
  <div className=" wrapper h-[607px] ">
      <div className="page-wrapper shadow-stone-60 dark:text-white rounded-2xl shadow-2xl shadow-gray-800 dark:shadow-lg  mt-[50px] flex justify-center items-center dark:shadow-slate-500 dark:bg-gray-900">
      <div className="img ml-[-150px] mr-[50px]">
        <img
          className="mt-[30px] mx-[15px] max-w-[320px] rounded-2xl"
          src={Poster}
          alt={Title}
        />
        <a
          href=""
          className="download btn btn-info text-[17px] w-[120px] mt-[10px] mb-[30px] ml-[100px]"
          download={Poster}
        >
          Download
        </a>
      </div>
      {/*  */}
      <h1 className="hr border-r-[3px] h-[430px] mt-[-30px] border-neutral-900 dark:border-amber-300"></h1>
      {/*  */}
      <div className=" pl-[50px] flex flex-col justify-center items-center py-[60px]">
        <span className="title font-bold text-[24px] mb-[15px]">
          Title : {Title}{" "}
        </span>
        {/*  */}
        <div className="texts flex gap-3 mb-[10px]">
          <h1 className="font-semibold text-[19px]">
            <span className="font-semibold text-[22px]">Year : </span>
            {Year}
          </h1>
          <h1 className="border-r-[3px]  border-neutral-900 dark:border-amber-400"></h1>
          <h1 className="font-semibold text-[20px]">
            <span className="font-semibold text-[22px]">Which Country : </span>
            {Country}
          </h1>
        </div>
        {/*  */}
        <div className="texts flex gap-3 mb-[10px]">
          <h1 className="font-semibold text-[19px]">
            <span className="font-semibold text-[22px]">Type : </span>
            {Type}
          </h1>
          <h1 className="border-r-[3px]  border-neutral-900 dark:border-amber-300"></h1>
          <h1 className="font-semibold text-[20px]">
            <span className="font-semibold text-[22px]">Language : </span>
            {Language}
          </h1>
        </div>
        {/*  */}
        <div className="texts flex gap-3 mb-[10px]">
          <h1 className="font-semibold text-[19px]">
            <span className="font-semibold text-[22px]">Genre : </span>
            {Genre}
          </h1>
          <h1 className="border-r-[3px]  border-neutral-900 dark:border-amber-300"></h1>
          <h1 className="font-semibold text-[20px]">
            <span className="font-semibold text-[22px]">Movie Time : </span>
            {Runtime}
          </h1>
        </div>
        {/*  */}
        <div className="texts flex gap-3 mb-[10px]">
          <h1 className="font-semibold text-[19px]">
            <span className="font-semibold text-[22px]">Writer : </span>
            {Writer}
          </h1>
          <h1 className="border-r-[3px]  border-neutral-900 dark:border-amber-300"></h1>
          <h1 className="font-semibold text-[20px]">
            <span className="font-semibold text-[22px]">Released : </span>
            {Released}
          </h1>
        </div>
        {/*  */}
        <h1 className="font-semibold text-[20px]  mb-[10px]">
          <span className="font-semibold text-[22px]">Awards : </span>
          {Awards}
        </h1>
        {/*  */}
        <div className="texts flex gap-3 mb-[10px]">
          <h1 className="font-semibold text-[19px]">
            <span className="font-semibold text-[22px]">Rated : </span>
            {Rated}
          </h1>
          <h1 className="border-r-[3px]  border-neutral-900 dark:border-amber-300"></h1>
          <h1 className="font-semibold text-[20px]">
            <span className="font-semibold text-[22px]">Profit made : </span>
            {BoxOffice}
          </h1>
        </div>
        {/*  */}
        <Link to={"/"} className="btn btn-info text-[17px] mt-[30px]">
          Back To Home
        </Link>
      </div>
    </div>
  </div>
  );
}

export default Movie;
