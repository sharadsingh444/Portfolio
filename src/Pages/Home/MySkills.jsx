import data from "../../data";
import { FaNodeJs } from "react-icons/fa";
export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
            {/* <div>
              <hr className="hrClass" />
              <div>
                <h3>Tech Stack</h3>
                <button className="skillSet">Mongo</button>
              </div>
            </div> */}
          </div>
        ))}

      </div>
    </section>
  );
}