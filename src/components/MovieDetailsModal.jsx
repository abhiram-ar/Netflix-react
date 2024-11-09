import CloseIcon from "@mui/icons-material/Close";
function MovieDetailsModal({ poster, setModalOpen }) {
    return (
        <div className=" w-screen inset-0 fixed bg-black z-40 bg-opacity-80">
            {/* modal */}
            <div className="animate-jump-in relative w-[45em] m-auto mt-20 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300">
                <div className="relative h-96 w-full">
                    <button
                        onClick={() => {
                            setModalOpen(false);
                            document.body.style.overflowY = "scroll";
                        }}
                        className="absolute right-5 top-5 w-5 h-5 p-5 z-10 rounded-full flex justify-center items-center bg-zinc-800 text-white"
                    >
                        <CloseIcon />
                    </button>
                    <img className="absolute w-full h-96" src={poster}></img>
                    <div className="absolute inset-0 bg-gradient-to-b from-1% from-black/70 via-15% via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/0" />
                    <div className="absolute h-96 inset-0 bg-gradient-to-t from-[#181818]/100 via-transparent to-transparent" />
                    <h2 className="absolute bottom-10 left-10 text-white text-5xl">
                        Meiyazhagan
                    </h2>
                </div>
                {/* details */}
                <div className=" text-white bg-[#181818] p-10">
                    <div className="flex">
                        <div className="w-2/3 pr-10">
                            <p className="text-zinc-400 font-semibold">
                                2024 2h 38m{" "}
                                <span className="border h-fit px-1 text-[0.7em]">
                                    HD
                                </span>
                            </p>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti atque inventore amet,
                                dolores quibusdam facere aliquid voluptate
                                eligendi dolorum iusto aut impedit, vitae nisi
                                harum delectus libero recusandae, a provident!
                            </p>
                        </div>
                        <div>
                            <p className="mt-6">
                                <span className="font-semibold text-zinc-500">
                                    Genres:{" "}
                                </span>
                                Drama, Tamil
                            </p>
                            <p className="mt-2">
                                <span className="font-semibold text-zinc-500">
                                    Available in:{" "}
                                </span>
                                Tamil, malayalam
                            </p>
                        </div>
                    </div>
                </div>

                {/* More like thi */}
                <div></div>
            </div>
        </div>
    );
}

export default MovieDetailsModal;
