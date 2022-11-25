import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route  } from "react-router";
import axios from "axios";
import Auth from "./Auth";
import config from "./config";
import Posts from "./Posts";
import Users from "./Users";

const components = {
  posts: Posts,
  users: Users,
}

function App() {
  const [links, setLinks] = React.useState([]);
  const [resources, setResources] = React.useState([]);
  const [data, setData] = React.useState([]);
  
  const getLinks = () => {
    axios.get(config.url).then((response) => {
      setLinks(response.data.links);
      setResources(response.data.resources);
      setData(response.data.data);
    });
  };

  React.useEffect(() => {
    getLinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <Route key="auth" path="/" exact>
          <Auth options={{
               links,
               data,
               resources,
               setLinks,
               setData,
               setResources,
          }} />
        </Route>
        {links.map((link) => {
          const Render = components[link.key];
          return <Route key={link.key} path={link.path}>
            <Render options={{
               links,
               data,
               resources,
               setLinks,
               setData,
               setResources,
            }} />
          </Route>
        })}
      </Switch>
    </Router>
  );
}

export default App;
