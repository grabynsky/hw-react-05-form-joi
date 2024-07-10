import React, {FC, useState} from 'react';
import './App.css';
import PostsComponent from "./components/PostsComponent";
import FormComponent from "./components/FormComponent/FormComponent";

const App:FC = () => {

    const [trigger, setTrigger] = useState<boolean>(false);
  return (
    <>
        <FormComponent setTrigger={setTrigger}/>
        <hr/>
        <PostsComponent trigger={trigger}/>
    </>
  );
}

export default App;
