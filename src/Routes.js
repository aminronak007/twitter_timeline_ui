import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

const MenuBar = React.lazy(() => import("./components/menubar/index"));
const Home = React.lazy(() => import("./components/home/index"));
const Explore = React.lazy(() => import("./components/explore/index"));
const Notifications = React.lazy(() =>
  import("./components/notifications/index")
);
const Messages = React.lazy(() => import("./components/messages/index"));
const BookMarks = React.lazy(() => import("./components/bookmarks/index"));
const Lists = React.lazy(() => import("./components/lists/index"));
const Profile = React.lazy(() => import("./components/profile/index"));
const SideBar = React.lazy(() => import("./components/sidebar/index"));

const Routes = () => {
  const theme = useSelector((state) => state.theme);
  const withMenuBar = (WrappedComponent) => () =>
    (
      <React.Fragment>
        <Row style={{ background: theme.bg }}>
          <Col lg={7} md={5} xs={5}>
            <MenuBar />
          </Col>
          <Col lg={9} md={19} xs={19}>
            <WrappedComponent />
          </Col>
          <Col lg={8} md={0} xs={0}>
            <SideBar />
          </Col>
        </Row>
      </React.Fragment>
    );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withMenuBar(Home)} />
        <Route path="/explore" component={withMenuBar(Explore)} />
        <Route path="/notifications" component={withMenuBar(Notifications)} />
        <Route path="/messages" component={withMenuBar(Messages)} />
        <Route path="/bookmarks" component={withMenuBar(BookMarks)} />
        <Route path="/lists" component={withMenuBar(Lists)} />
        <Route exact path="/profile" component={withMenuBar(Profile)} />
      </Switch>
    </Router>
  );
};

export default Routes;
