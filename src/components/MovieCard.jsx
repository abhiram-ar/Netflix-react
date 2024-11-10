import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MovieCard({ moviePoster, movieDetails, type }) {
    const [isActive, setActive] = useState(false);
    const [ismodalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    
    if (ismodalOpen === true && isActive === true) setActive(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        document.body.style.overflowY = "hidden"
    };

    if(!movieDetails.backdrop_path){ return}

    return (
        <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className=" w-80 h-fit overflow-hidden rounded-lg shadow-lg shadow-black cursor-pointer transition-transform duration-300 hover:scale-125 hover:z-20"
        >
            {/* header */}
            <div className="relative">
                <img src={moviePoster} className="w-full h-full object-cover" />

                {isActive && (
                    <h2 className=" text-white font-semibold absolute bottom-0 left-0 bg-black bg-opacity-40 px-2 rounded-tr-lg">
                        {movieDetails.title || movieDetails.name}
                    </h2>
                )}
            </div>

            {/* onhoveer control */}
            {isActive && (
                <div className="p-4 bg-[#181818] text-white">
                    {/* pop up header */}
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 justify-center items-center">
                            <PlayCircleRoundedIcon
                                onClick={() => {
                                    navigate(`/watch/${movieDetails.id}`);
                                    document.body.style.overflowY = "unset";
                                }}
                                sx={{ fontSize: 32, marginRight: "-5px" }}
                            />
                            <button className="h-5 w-5 flex justify-center p-3 items-center bg-[#232323] border-2 border-[#979797] rounded-full ">
                                <AddOutlinedIcon sx={{ fontSize: 20 }} />
                            </button>
                            <button className="h-5 w-5 flex justify-center p-3 items-center bg-[#232323] border-2 border-[#979797] rounded-full">
                                <ThumbUpOutlinedIcon sx={{ fontSize: 15 }} />
                            </button>
                        </div>
                        <button
                            onClick={handleModalOpen}
                            className="h-5 w-5 flex justify-center p-3 items-center bg-[#232323] border-2 border-[#979797] rounded-full"
                        >
                            <ExpandMoreOutlinedIcon sx={{ fontSize: 20 }} />
                        </button>
                    </div>

                    {/* popup body */}
                    <div className="text-[#bbbbbb] flex gap-2 items-center mt-2 ml-1">
                        <span className="h-fit text-[0.7em] border  border-[#bbbbbb] px-1">
                            U/A 7+
                        </span>
                        <span className="text-[.7em]">2h 38m</span>
                        <span className="border font-bold italic text-[0.6em] border-[#bbb] h-fit px-1 ">
                            HD
                        </span>
                    </div>
                    <div className="flex mt-2 text-[.7em]">
                        <p className="after:text-[#979797] after:content-['•'] after:px-2">
                            Nostalgic
                        </p>
                        <p className="after:text-[#979797] after:content-['•'] after:px-2">
                            Heatfelt
                        </p>
                        <p>Drama</p>
                    </div>
                </div>
            )}
            {ismodalOpen &&
                createPortal(
                    <MovieDetailsModal
                        poster={moviePoster}
                        movieDetails={movieDetails}
                        setModalOpen={setModalOpen}
                        type={type}
                    />,
                    document.body
                )}
        </div>
    );
}

export default MovieCard;
