
import Header from"./components/Header"
import FeedbackList from "./components/FeedbackList"
import {useState} from 'react'
import FeedbackData from "./data/FeedbackData"
function App(){
    const [feedback,setFeedback] =useState(FeedbackData)

    return (
        <div>
        <Header text="Feedback Survey"/>
        <h1>My App</h1>
        
        <div className="cntainer">
            <FeedbackList feedback={feedback}/>
          
        </div>
        </div>
    )
    // const title ="Blog Post"
    // const body = "This is the blog body"
    // const comments =[
    //     {id: 1,text:"comment 1"},
    //     {id: 2,text:"comment 2"},
    //     {id: 3,text:"comment 3"}
    // ]

    // const loading = false
    // const showComments = true



    // if(loading) 
    // return <h1>loading....</h1>

    // return (
    // <div>
    //     <h1>{title}</h1>
    //     <p>{body}</p>

    //     {showComments ? ( 
    //     <div className="comments">
    //     <h3>Comments</h3>
    //     <ul>
    //         {comments.map((comment,index)=>(
    //         <li key={index}>{comment.text}</li>
    //         ))}
    //     </ul>
    //     </div>):('no comments')}


       
    //     </div>
    // )

}
export default App