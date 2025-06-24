import './Home.css';

function Home({ data }) {
    console.log("data ", data);

    return (
        <div className="home-container">
            {data.length > 0 ? (
                data.map((name, index) => (
                    <div className="card" key={index}>
                        <p className="card-title">{name}</p>
                    </div>
                ))
            ) : (
                <p className="no-data">No name matching</p>
            )}
        </div>
    );
}

export default Home;
