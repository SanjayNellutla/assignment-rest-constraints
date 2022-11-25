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
  const endPoint = window.location.pathname;
  const [loading, setLoading] = React.useState(false);
  const [links, setLinks] = React.useState([]);
  const [resources, setResources] = React.useState([]);
  const [data, setData] = React.useState([]);
  
  const getLinks = (_path) => {
    setLoading(true);
    axios.get(`${config.url}${_path || endPoint}`, {
      headers: {
        authorization: config.token,
      }
    }).then((response) => {
      setLoading(false);
      setLinks(response.data.links);
      setResources(response.data.resources);
      setData(response.data.data);
    }, () => {
      setLoading(false);
    });
  };

  const getLink = (key) => {
    const send = links.find((item) => item.key === key);
    // console.log(links.find((item) => item.key === key));
    return send.url;
  }

  const onRouteChange = (_path) => {
    getLinks(_path);
  };

  React.useEffect(() => {
    getLinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return 'Loading ...';

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
               onRouteChange,
               getLink,
          }} />
        </Route>
        {links.map((link) => {
          const Render = components[link.key];
          return <Route key={link.key} path={link.url} exact>
            <Render options={{
               links,
               data,
               resources,
               setLinks,
               setData,
               setResources,
               onRouteChange,
               getLink,
            }} />
          </Route>
        })}
      </Switch>
    </Router>
  );
}

export default App;
