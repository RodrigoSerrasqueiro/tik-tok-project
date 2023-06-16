import "./App.css";
import Video from "./pages/video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="Rodrigo Serrasqueiro"
          description="O gato goleiro"
          music="Musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />

        <Video 
          likes={345}
          messages={345}
          shares={654}
          name="Graziela Serrasqueiro"
          description="Olha esse gato!"
          music="Musiquinha"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
        
      </div>
    </div>
  );
}

export default App;
