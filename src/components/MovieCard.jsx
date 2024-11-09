import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useState } from "react";
import { Tune } from "@mui/icons-material";

function MovieCard({ moviePoster }) {
    const [isActive, setActive] = useState(false);
    return (
        <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className=" w-64 h-fit overflow-hidden rounded-lg shadow-lg shadow-black cursor-pointer transition-transform duration-300 hover:scale-150 hover:z-20"
        >
            {/* header */}
            <div className="relative">
                <img src={moviePoster} className="w-full h-full object-cover" />

                {isActive && (
                    <h2 className="absolute bottom-2 left-2 text-white font-semibold">
                        Movie title
                    </h2>
                )}
            </div>

            {/* onhoveer control */}
            {isActive && (
                <div className="p-4 bg-[#181818] text-white">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 justify-center items-center">
                            <PlayCircleRoundedIcon
                                sx={{ fontSize: 32, marginRight: "-5px" }}
                            />
                            <div className="h-5 w-5 flex justify-center p-3 items-center bg-[#232323] border-2 border-[#979797] rounded-full ">
                                <AddOutlinedIcon sx={{ fontSize: 20 }} />
                            </div>
                            <div className="h-5 w-5 flex justify-center p-3 items-center bg-[#232323] border-2 border-[#979797] rounded-full">
                                <ThumbUpOutlinedIcon sx={{ fontSize: 15 }} />
                            </div>
                        </div>
                        <div className="h-5 w-5 flex justify-center p-3 items-center bg-[#232323] border-2 border-[#979797] rounded-full">
                            <ExpandMoreOutlinedIcon sx={{ fontSize: 20 }} />
                        </div>
                    </div>

                    <div className="text-[#bbbbbb] flex gap-2 items-center mt-2 ml-1">
                        <spam className="h-fit text-[0.7em] border  border-[#bbbbbb] px-1">
                            U/A 7+
                        </spam>
                        <spam className="text-[.7em]">2h 38m</spam>
                        <spam className="border font-bold italic text-[0.7em] border-[#bbb] h-fit px-1 ">
                            HD
                        </spam>
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
        </div>
    );
}

export default MovieCard;
