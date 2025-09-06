import React, { Component, useEffect, useState } from 'react'
import "./Chat.scss" 
import ChatHeader from './ChatHeader'
import { AddCircleOutline, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hooks'
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '../../firebase'
interface Messaes {
  timestamp: Timestamp;
  message: string;
  user :null | {
    uid : string,
    photo : string,
    email : string,
    displayName : string,
  }
}


const Chat = () => {
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const [inputText , setInputText] = useState<string>("");
  const [messages , setMessages] = useState<Messaes[]>([]);

  useEffect( () => {
  let collectionRef = collection(
      db , 
      "channels" ,
      String(channelId)  ,
      "messages"
    );

    const collectionRefOrderBy = query(collectionRef , orderBy("timestamp" , "desc"))
    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messaes[]= [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
      });
    },[channelId])

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const collectionRef : CollectionReference<DocumentData> = collection(db , "channels" ,String(channelId)  ,"messages");
    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef , {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    setInputText("")
  }

  return (
    <div className='chat'>
      <ChatHeader channelName = {channelName} />
      <div className='chatMessages'>
        {messages.map((message , index) => (
          <ChatMessage 
            key={index} 
            message={message.message}
            timestamp ={message.timestamp}
            user ={message.user}
          />
        ))}
      </div>
      {channelName ? (
        <div className="chatInput">
          <AddCircleOutline/>
          <form>
            <input 
              type='text' 
              placeholder='testへメッセージ送信' 
              value={inputText}
              onChange={( e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} 

            />
            <button type='submit' className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => 
              sendMessage(e)}>
              送信
            </button>
          </form>
          <div className='chatInputIcons'>
            <CardGiftcard />
            <Gif />
            <EmojiEmotions/>
          </div>
        </div>
      ) : (
        <></>
      )}

    </div>
  )
}

export default Chat