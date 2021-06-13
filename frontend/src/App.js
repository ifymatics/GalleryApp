import { Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Card from "././components/UI/Card/Card";
import ImageDetails from "./components/ImageDetails/ImageDetails";
const App = () => {
  return (
    <Card className={classes.App}>
      <Header />
      <main>
        <Switch>
          <Route path="/gallery/:imageId" component={ImageDetails} exact />
          <Route path="/" exact component={Gallery} />
          {/* <Gallery /> */}

          {/* <ImageDetails /> */}
          {/* </Route> */}
        </Switch>
      </main>
    </Card>
  );
};

export default App;
