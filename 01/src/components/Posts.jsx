import React, {useState, useEffect} from 'react';

function Posts({title}) {
    const[posts, setPosts]=useState([]);
    const[visability, setVisability]=useState(10);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data.slice(0, visability)));
    },[visability]);

    function loadMore(){
        setVisability(visability=>visability+5)
    };

    
    // setTimeout(loadMore, 3000)
    
    


    return (
        <>
            <div className='container'>
            <h3 className='text-center my-4'>
                {title}
            </h3>

            <table className="table table table-hover">
                <thead>
                    <tr>
                        <th scope="col">UserID</th>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Text</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post, index)=>{
                        return<tr key={index}>
                            <td>
                                {post.userId}
                            </td>
                            <td>
                                {post.id}
                            </td>
                            <td>
                                {post.title}
                            </td>
                            <td>
                                {post.body}
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
            <button className ='btn btn-lg btn-primary my-4'style={{width:'100%'}}onClick={loadMore}>Load more posts</button>
        </div>
            
        </>
    );
}

export default Posts;