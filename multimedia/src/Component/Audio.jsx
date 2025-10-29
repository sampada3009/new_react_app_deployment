import audioFile from "../assets/audio.mp3";

export function Audio() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Audio Example</h2>
      <audio controls>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
