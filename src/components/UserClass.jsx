import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: null,
    };
    console.log("Child - constructor" + this.props.name);
  }
  render() {
    const { count, count2, userInfo } = this.state;
    // const { avatar_url, login } = userInfo;
    // console.log("Child - render" + name);
    if (userInfo === null) return null;

    return (
      <div className="userCard">
        <h1>
          {count}, {count2}
        </h1>
        <div>
          <button
            className="btnLogin"
            onClick={() => {
              this.setState({
                count: count + 1,
                count2: count2 + 1,
              });
            }}
          >
            Increment the Count
          </button>
        </div>
        <h1>Name : {userInfo.login}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>
          Image: <img src={userInfo.avatar_url}></img>
        </h3>
      </div>
    );
  }
  async componentDidMount() {
    const fetchGithubUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users/MC1293");
        const results = await response.json();

        this.setState({
          userInfo: results,
        });
        console.log(results);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchGithubUser();
  }
  componentDidUpdate() {
    console.log("Update of component");
  }

  componentWillUnmount() {
    console.log("unmount the component");
  }
}

export default UserClass;
