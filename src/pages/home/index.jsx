import Button from "../../components/button";
import ProfilePicture from "../../components/profilePicture";
import personalInfo from "../../data/personal-info.json";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <main className="remy-home">
      <div className="title-box">
        <div className="title">
          <h1>
            <span>Rémy</span>Balland
          </h1>
          <div className="job-list">
            <Typewriter
              options={{
                strings: personalInfo["job-list"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <Button content={"Par ici !"} link={"/à-propos"} classname={"btn btn-full"} isNav={true} />
        </div>
        <ProfilePicture />
      </div>
    </main>
  );
}

export default Home;
