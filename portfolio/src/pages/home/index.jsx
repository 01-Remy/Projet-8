import Button from "../../components/bouton";
import ProfilePicture from "../../components/profilePicture";

function Home() {
  return (
    <main className="remy-home">
      <div className="title-box">
        <div className="title">
          <h1>
            <span>Rémy</span>Balland
          </h1>
          <p>Développeur web</p>
          <Button content={"Par ici !"} link={"/à-propos"} classname={"btn btn-full"} />
        </div>
        <ProfilePicture />
      </div>
    </main>
  );
}

export default Home;
