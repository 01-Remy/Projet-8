import remyPhoto from "../../assets/images/PP_Rémy.jpg";

function ProfilePicture() {
  return (
    <div className="image-container">
      <img src={remyPhoto} alt="Gros plan de Rémy avec une chemise bleue en lin"></img>
    </div>
  );
}

export default ProfilePicture;
