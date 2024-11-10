import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoPlayer() {
    // default movie id : 698687
    //default video id : tgbNymZ7vqY

    const [videoID, setVideoID] = useState("");
    const [loading, setLoading] = useState(true)

    const {id: movieID} = useParams();
    console.log("moviee iD",movieID)
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2I1YTNiYTYwM2E0YTNmOWI5ZDZhMGJjOTEyNWE5YiIsIm5iZiI6MTczMTA0MDA1NC41OTkyOTAxLCJzdWIiOiI2NzJkOTIxN2JlNzZiMDY0NGIzZGY0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nSyuKOosY6ayI2D8PH_c_E9xbftyV11Tuo7eLGs2l9A",
            },
        };

        fetch(
            `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                setVideoID(res.results[1].key);
                console.log(`sucessfull fetching a video of the movie`);
                setLoading(false)
            })
            .catch((err) => {console.error(`error while fetchng video details and id`,err); setLoading(false)});

    }, [movieID]);



    return (
        <div className="h-screen w-screen overflow-hidden absolute z-50">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoID}?si=u7w_ooN3wawYDZKH`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default VideoPlayer;
