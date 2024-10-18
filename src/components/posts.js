import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ApiPost() {
    const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try{
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setData(result.data);
            // console.log(result.data)
        }catch(error) {
            // setData(error);
            console.log(error)
            // setError(error);
        }
        finally{
            setLoading(false);
        }
    }


    useEffect(() => {
       fetchPosts();
    }, [])

    // if(loading) {
    //     return <div>Loading...</div>;
    // }

    // if(error) {
    //     return <div>Error: {error.message}</div>;
    // }

  return (
    <div>
     {
        data.map((post, id) => (
            <div key={id}>
              <h3>{`${post.id}. ${post.title}`}</h3>
              <p>{post.body}</p>
            </div>
          ))
     }
    </div>
  )
}

export default ApiPost;
