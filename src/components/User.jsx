import { useState, useEffect } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [userInfo, setUserInf0] = useState(null);

  useEffect(() => {
    fetchGithubUser();
  }, []);

  const fetchGithubUser = async () => {
    try {
      const response = await fetch("https://api.github.com/users/MC1293");
      const results = await reponse.json();
      // if(results.status)
      console.log(results);
      setUserInf0(results);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="userCard">
      <h1>
        {count},{count2}
      </h1>
      <h1>Name : {props.name}</h1>
      <h2>Location: Madurai, TamilNadu</h2>
      <h3>X handler: benz_vino</h3>
    </div>
  );
};
export default User;
