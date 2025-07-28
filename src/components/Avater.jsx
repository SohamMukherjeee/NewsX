import man1 from "../assets/Photo/man1.webp";
import man2 from "../assets/Photo/man2.webp";
import man3 from "../assets/Photo/man3.webp";

function Avater() {
  return (
    <>
      <div className="avatar-group -space-x-6">
        <div className="avatar">
          <div className="w-12">
            <img src={man1} />
            <a href="https://www.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_17830501.htm">
              Image by rawpixel.com on Freepik
            </a>
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={man2} />
            <a href="https://www.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_17830115.htm">
              Image by rawpixel.com on Freepik
            </a>
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={man3} />
            <a href="https://www.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_27507633.htm">
              Image by tonodiaz on Freepik
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Avater;
