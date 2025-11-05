import PostCard from "./PostCard";

export default function PostsContainer({ data}){
  
    return (

    <div>

    
    {data.map((item)=>(
      <PostCard {...item} 
      key={item.id} />
      
 ))}


 </div>





);










}