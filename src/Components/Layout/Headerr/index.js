import Header from "../Components/Header";

function Headerr({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default Headerr;
