export default function PostForm({ newPost,  handleOnChange,  handleOnSubmit }){
  
    return (


    <div>
     <form action="" onSubmit={handleOnSubmit}>
        
     <h2>Post Form</h2>

        <label htmlFor= "title" >Title:</label>
         <input
          type="text"
          name="title"
          id="title"
          value= {newPost.title}
          onChange= {handleOnChange}

    />
 <br/>

      <label htmlFor="body" >Body:</label>
        <input
          type="text"
          name="body"
          id="body"
          value= {newPost.body}
          onChange={handleOnChange}
/>
  <br/>
 
    <input type="submit" value="Submit" />
    </form>
    </div>



);













}