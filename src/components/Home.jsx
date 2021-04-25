import React from 'react'

const Home = () => {
    const url = "https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80"

    return (
        <div>

            <img className='main' src={url} />
        </div>
    )
}

export default Home;
