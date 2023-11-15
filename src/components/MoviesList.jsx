import { Link } from "react-router-dom";
import Loader from "./Loader";

export function MovieList({ data }) {
  if (data === null) {
    return <Loader/>
  }
  return (
    <ul className=" flex gap-3 flex-wrap dark:text-white  justify-evenly">
      {data &&
        data.map((movie) => {
          const { Title, Poster, Type, Year, imdbID } = movie;
          return (
            <Link
              key={imdbID}
              to={`/movie/${imdbID}`}
              className="movieslist card border w-[330px] mb-[30px] shadow-slate-400 dark:shadow-slate-500 shadow-xl "
            >
              <img
                className="h-[350px] object-cover rounded-[16px] w-full"
                src={Poster}
                alt={Title}
              />
              <div className="mt-[-18px] card-body">
              <h1 className="text-[24px] font-semibold text-center">{Title}</h1>
              <hr className="h-[2px] bg-black" />
                  <div className="flex flex-col justify-start items-center ">
                    <h2 className="text-[18px]"><span className="text-xl font-semibold">Year:</span> {Year}</h2>
                    <h1 className="text-[18px]"><span className="text-xl font-semibold">Type:</span> {Type}</h1>
                  </div>
              </div>
              <div className="card-actions justify-end px-5 mt-[-20px] mb-3">
                <button className="btn text-lg btn-primar bg-yellow-400">Watch 🎬</button>
              </div>
            </Link>
          );
        })}
    </ul>
  );
}


