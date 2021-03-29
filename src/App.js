import Typography from "@material-ui/core/Typography";
import CustomizedTimeline from "./components/Timeline";
import GitHubUser from "./containers/GitHubUser";

function App() {
  return (
    <div className="App">
        <Typography variant="h2" align="center">
            Alexa's Playground
        </Typography>
        <CustomizedTimeline />
        <GitHubUser />
    </div>
  );
}

export default App;
