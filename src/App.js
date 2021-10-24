import "./App.css";
import Content from "./components/contents/Content";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "80%",
      }}
    >
      <TopNav />
      <Content />
    </div>
  );
}

export default App;
