function ReelPage() {
    return (
        <div className="reel-page text-white">
            <div className="container d-flex flex-column align-center">
                <h1>We're working on this page!</h1>
                <p>This page will soon be available. Meanwhile you can check my reel at this link:</p>
                <a href={import.meta.env.VITE_REEL_LINK} className="text-uppercase text-center rounded" target="_blank">watch Reel</a>
            </div>
        </div>
    )
}

export default ReelPage