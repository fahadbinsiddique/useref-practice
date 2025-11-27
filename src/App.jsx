import CatFriends from "./components/CatFriends";
import Domref from "./components/Domref";
import Form from "./components/Form";

const App = () => {
 
  return (
    <>
    <div className='border-2 m-2'>
      <Domref />
    </div>

    <Form/>
    <CatFriends/>
    </>
  );
};

export default App;
