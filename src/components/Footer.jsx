import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
    return (
        <div className="mt-4  py-10 w-2/3 m-auto ">
            <div className="my-10 text-white flex gap-5">
                <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
                <YouTubeIcon fontSize="large" />
            </div>
            <ul className="text-gray-400 grid grid-cols-4 gap-x-10 gap-y-5">
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
                <li>Media Centre</li>
                <li>Privacy</li>
                <li>Contact us</li> 
            </ul>
      <button className="my-5 py-2 px-3 text-gray-400 border">Service Code</button>
            <p className=" mt-10 text-gray-400">© 1997-2024 Netflix, Inc.</p>
        </div>
    );
}

export default Footer;
