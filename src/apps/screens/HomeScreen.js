import React, {useContext} from "react";
import {UserContext} from "../components/Context";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {db} from "../Services/Firebase";
import {gql, useQuery} from "@apollo/client";

const GET_STUDENTS = gql`
  query GetStudent {
    student {
      id
      name
    }
  }
`;

export default function HomeScreen() {
  const {user} = useContext(UserContext);
  const {data, loading} = useQuery(GET_STUDENTS);
  async function AddFirebaseData() {
    console.log("Firebase Database");
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function ReadFirebaseData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data);
    });
  }

  function ReadFromHasura() {
    console.log(data);
  }

  if (loading) {
    return <>Loading</>;
  } else {
    return (
      <div>
        HomeScreen
        <p>Welcome {user}</p>
        <button onClick={() => AddFirebaseData()}>ADD DATA</button>
        <button onClick={() => ReadFirebaseData()}>READ DATA</button>
        <button onClick={() => ReadFromHasura()}>READ HASURA</button>
      </div>
    );
  }
}
