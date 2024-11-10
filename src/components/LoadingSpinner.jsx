import spinnergif from "./../assets/spinner.gif"

export default function LoadingSpinner() {
  return (
      <div className="fixed inset-0  bg-black flex justify-center items-center">
          <img className="w-1/5" src={spinnergif} alt="" />
      </div>
  );
}
