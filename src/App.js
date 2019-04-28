import React, { Component } from "react";
import { Admin, Resource, Login } from "react-admin";
import buildGraphQLProvider from "ra-data-graphql-simple";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import { ActorList, ActorCreate, ActorShow, ActorEdit } from "./resources/actor";

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    buildGraphQLProvider({ clientOptions: { uri: "http://localhost:4000/graphql" }})
        .then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;
    const MyLoginPage = () => <Login />;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
        <Admin loginPage={MyLoginPage} dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
          <Resource name="Actor" options={{ label: "Actors" }} list={ActorList} show={ActorShow} edit={ActorEdit} create={ActorCreate}/>
        </Admin>
    );
  }
}

export default App;
