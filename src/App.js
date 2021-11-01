import "./App.css";
import Content from "./components/contents/Content";
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIOClient from "socket.io-client";

function App() {
  console.log("Starting connect socket.io");
  const socket = socketIOClient("ws://localhost:3000", {
    transports: ["websocket"],
  });

  socket.emit("some room", "Hellow my name is client");

  // socket.emit("newMessage", "Hi my name is client");
  // socket.on("newMessage", (messageNew) => {
  //   console.log("message: " + messageNew);
  // });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "80%",
        margin: "10px",
      }}
    >
      <Content />
    </div>
  );
}

export default App;
