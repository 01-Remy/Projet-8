import Button from "../../components/button";

function Error() {
  return (
    <main className="remy-error">
      <h1 className="page-title">Oups ! 404</h1>
      <p className="error-text">Vous êtes peut-être perdu ?</p>
      <Button content={"Je suis perdu"} link={"/"} classname={"btn btn-full"} isNav={true} />
    </main>
  );
}

export default Error;
