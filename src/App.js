import  TrelloList  from './TrelloList';
import './App.css';
import {useSelector} from 'react-redux'
import AddButton from './AddButton';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const lists = useSelector(state => state.list)
  console.log(lists)
  const styles = {
    flex:{
      display:'flex',
      flexDirection:'row'
    }
  }
  const onDragEnd = ()=>{

  }

  return (
    
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
      <h1>TRELLO-CLONE</h1>
      <div style={styles.flex}>
        {lists.map((list)=>{
         
       return <TrelloList list={list} key={list.id}/>
        })}
      <AddButton/>
      </div>
      </DragDropContext>
    </div>
  );
}

export default App;
