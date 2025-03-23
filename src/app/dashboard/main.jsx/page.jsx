import Link from "next/link";

export default async function Main() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    console.log(users);


    return (
        <>
            <main>
                <div className="main_nav">
                    <ul>
                        <li><a href="">All Plants</a></li>
                        <li><a href="">New Arrivvals</a></li>
                        <li><a href="">Sale</a></li>
                    </ul>
                </div>
                <div className="main_main">
                    {users.map((user) => {
                        return (
                            <div className="card " key={user._id}>
                                <div className="bir">
                                    <p>Name: {user.name}</p>
                                    <p>Surname: {user.username}</p>
                                    <p>Email: {user.email}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    );
}

