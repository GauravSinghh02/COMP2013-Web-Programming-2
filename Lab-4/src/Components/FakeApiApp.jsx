import { useState, useEffect } from "react";
import PostForm from  "./PostForm";
import PostsContainer  from "./PostsContainer" ;

export default function FakeApiApp()  {
  
  const URL = "https://jsonplaceholder.typicode.com/posts" ;
  const [data, setData] =  useState([]) ;
  const [isLoading, setIsLoading] =  useState(true) ;

  useEffect(() => { 
     fetchQuoteData(); 
 }, []);

    // fetchinh API data 
  const fetchQuoteData =  async ()=>  {
      const response =  await fetch(URL);
      const QuotePostsData= await response.json() ;
      setData(QuotePostsData);
      setIsLoading(false);

  };


///////////////////////////////////////////
// User input posts


  // state to handle posts added by user
  const [newPost, setNewPost] =  useState({ title: "", body: "" });


    // function handles the input changes in the form
  const handleOnChange=(e)=>{
    setNewPost((prevPost)=> {
      return { ...prevPost, [e.target.name]:  e.target.value};
    });
  };





 // submit button function 
  const handleOnSubmit = (e) => { e.preventDefault(); 

 if (newPost.title === "" ||  newPost.body === ""){ // checking if Title and Body are Empty when user clicks submmit

    alert("Please Add Both Title and Body Fileds");
    return;
}
    // creating a fake post object as we can’t actually post to API
  const fakePost = {

     title: newPost.title,
     body: newPost.body,
 };

   // Adding New Post at the TOP
 setData((prevData) =>  [fakePost, ...prevData]);

// Resetting the Form fields
 setNewPost({

  title: "", 
  body: ""  
});

};






    return (

     <div>

      <h1>Fake API App - Gaurav</h1>

      {isLoading && <h2>Loading...</h2>}
      
    <>
          <PostForm
           newPost= {newPost}
            handleOnChange={handleOnChange}
           handleOnSubmit={handleOnSubmit}
    />

        <PostsContainer  data= {data} />
    
    </>
      
    </div>


  );























}