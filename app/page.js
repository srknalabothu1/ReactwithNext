export default function Page() {
    return (
        <div style={{ marginTop: "40px", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <a href="/about">About</a>
            <a href="/profile">Profile</a>
            <a href="/docs">docs</a>
            <div style={{ display: "flex"}}>
                <div>
                    <input type="search" placeholder="type here..." />
                </div>
                {/* <div style={{position:"absolute", marginLeft:"8rem"}}>X</div> */}
            </div>
        </div>
    )
}