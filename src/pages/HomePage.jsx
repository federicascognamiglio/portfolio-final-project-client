import { Link } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"

function HomePage() {

    // Global context variables
    const { categories } = useGlobalContext()

    return (
        <div className="home-page p-relative">
            <div className="container">
                {/* Background */}
                <div className="lockscreen-logo d-flex flex-column align-center">
                    <img className="logo" src="/img/scg-logo-white.png" alt="SCG Logo" />
                    <p className="subtitle text-uppercase">Graphic Designer - Motion Graphics - Content Creator</p>
                </div>
                {/* Folders */}
                <div className="d-flex justify-between">
                    <div className="folders d-flex">
                        {categories && categories.map(category => (
                            <div className="folder" key={category.id}>
                                <Link className='d-flex flex-column align-center' to={`/projects?categoryName=${category.name}`}>
                                    <img className='folder-icon' src="img/folder.png" alt="Folder Icon" />
                                    <p className="folder-label text-center">{category.name}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* Reel */}
                    <div className='d-flex flex-column align-center'>
                        <div className="reel folder d-flex flex-column align-center">
                            <img className="reel-icon folder-icon" src='img/reel-cover.png' alt='Reel thumbnail' />
                            <p className='folder-label text-center'>Reel</p>
                        </div>
                        <div className="cv folder d-flex flex-column align-center">
                            <img className="cv-icon folder-icon" src='img/pdf-file-icon.png' alt='Pdf icon' />
                            <p className='folder-label text-center'>CV</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage