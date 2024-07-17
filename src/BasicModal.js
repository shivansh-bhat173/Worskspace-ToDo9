import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import './App.css';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { useDispatch } from "react-redux";
import Members from './Members'
import { Button, TextField } from "@mui/material";
import ActiveMembers from "./ActiveMembers";
import Activity from './Activity'
import Tooltip from '@mui/material/Tooltip';
import Labels from './Labels'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BasicModal({ openmod, setopenmod, cardId, listId }) {
  const lists = useSelector((state) => state.list);
  const members = useSelector((state)=> state.member)
  const dispatch = useDispatch();
  console.log(cardId, listId);
  const { addCard, addList, removeCard, removeList, setDesc, settitle, addMember } =
    bindActionCreators(actionCreators, dispatch);

  let initial = "";

  // lists.map((list)=>{
  //   if(list.id===listid){
  //     const ecard = list.cards.filter((card)=>{
  //       return cardid===card.id
  //     })
  //     initial = ecard.desc
  //   }
  // })
  // get the best way to access without using array id
  function getdata(listId,cardId,i){
  lists.map((list)=>{
    if(list.id===listId){
      list.cards.map((card)=>{
        if(card.id===cardId){
          console.log(card.title)
          console.log(card.desc)
          if(i==='desc')  return card.desc;

          else return card.title;
        }
      })
    }
  })
}
  const [val, setval] = useState( getdata(listId,cardId,'desc'));
  const [Title, setTitle] = useState(getdata(listId,cardId,'title'));
  // useEffect(() => {
  //   setval(lists[listId].cards[cardId].desc)
  //   setTitle(lists[listId].cards[cardId].title)
  // }, [])


  function changedesc(listid, cardid, val) {
    setDesc(listid, cardid, val);
    console.log("work");

    
    // let elem = document.getElementById(`text${listid}${cardid}`)
    // elem.value=lists[listid].cards[cardid].desc;
    // console.log(elem.value)
  }
  function changetitle(listid, cardid, title) {
    settitle(listid, cardid, title);
    console.log("work");
    
  }
  function setvaluet(listid, cardid) {
    console.log(Title)
    if (Title !== "") {
      return Title;
    }
    let j = getdata(listid,cardid,'title');
    console('r')
    return j;
  }

  function setvalue(listid, cardid) {
    if (val !== "") {
      return val;
    }
    let r = getdata(listid,cardid,'desc');
    console.log('r')
     return r;
  }
  return (
    <div style={{maxHeight:'90vh',overflowY:'scroll'}}>
      <Modal
      
        key={cardId}
        open={openmod}
        onClose={() => {
          setopenmod(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Add a Member
              </Typography>
              <div style={{display:'flex'}}>
              {
                members.map((member)=>{
                  return <Members key={member.id} name={member.name} member={member}/>
                  
                })
              }
              </div>
              </div>
              <div>
                
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Active Members
              </Typography>
              <div style={{display:'flex'}}>
              {
                members.map((member)=>{
                  return <ActiveMembers key={member.id} name={member.name} member={member} />
                  
                })
              }
              </div>
              </div>
            <div>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Labels
                <Labels cardId={cardId} listId={listId}/>
              </Typography>
            </div>
          </div>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Title:
          </Typography>
          <TextField
            id={`title${listId}${cardId}`}
            placeholder="Add Title"
            multiline
            value={setvaluet(listId,cardId)}
            onChange={(e) => {setTitle(e.target.value)}}
            fullWidth
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              changetitle(listId, cardId, Title)
            }}
          >ADD</Button>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Description:
          </Typography>

          <TextField
            id={`text${listId}${cardId}`}
            placeholder="Add Description"
            multiline
            value={setvalue(listId, cardId)}
            onChange={(e) => {
              setval(e.target.value);
            }}
            fullWidth
          />
          {console.log(lists)}
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              changedesc(listId, cardId, val);
            }}
          >
            Add
          </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Activity:
          </Typography>
          <Activity cardId={cardId} listId={listId} members={members} />
        </Box>
      </Modal>
    </div>
  );
}
