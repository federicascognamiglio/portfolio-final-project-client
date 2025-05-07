import { useEffect, useState } from "react"
import { useGlobalContext } from "../contexts/GlobalContext"
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageSlider from "../components/ImageSlider";

function DetailPage() {
    // Global context variables
    const { baseApiUrl, baseImgUrl } = useGlobalContext()

    // State Variables
    const [project, setProject] = useState(null);

    // Get the slug from the URL
    const { slug } = useParams();

    // Get Project Detail
    const getProject = () => {
        axios.get(`${baseApiUrl}/projects/${slug}`)
            .then(resp => {
                const data = resp.data.data
                setProject(data)
            })
            .catch(error => {
                console.error("Error getting project details:", error);
            })
    }

    // Get Project at component's mounting
    useEffect(() => getProject(), [])

    // Format Date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate(); 
        const month = date.getMonth() + 1; 
        const year = date.getFullYear(); 
        return `${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    }


    return (
        <div className="detail-page text-white">
            <div className="container">
                {project &&
                    (
                        <>
                            <div className="d-flex flex-column align-center">
                                <h1 className="main-title">{project.title}</h1>
                                <h5 className="subtitle">{project.subtitle}</h5>
                                <span className="category-type rounded-lg">{`${project.category.name} - ${project.type.name}`}</span>
                                {/* Images */}
                                {project.media.length === 0
                                    ?
                                    <img className="cover-img" src={`${baseImgUrl}/${project.cover_image}`} alt={`Cover image of ${project.title}`} />
                                    :
                                    // Slider
                                    <ImageSlider images={project.media} />
                                }
                                <p className="details"><strong className="text-medium">Client: </strong>{project.client ? project.client : 'Personal Project'}</p>
                                <p className="details"><strong className="text-medium">Tags: </strong>{project.tags.map(tag => <span className="badge-tag" key={tag.id} style={{ backgroundColor: tag.color }}>{tag.name}</span>)}</p>
                                <p className="details"><strong className="text-medium">Tools: </strong>{project.tools.map(tool => <span className="badge-tool" key={tool.id} style={{ backgroundColor: tool.color }}>{tool.name}</span>)}</p>
                                {project.start_date &&
                                    <div className="details d-flex justify-between">
                                        <p className="date">
                                            <strong className="text-medium">Start date: </strong>
                                            {project.start_date ? formatDate(project.start_date) : 'N/A'}
                                        </p>
                                        <p>
                                            <strong className="text-medium">End date: </strong>
                                            {project.end_date ? formatDate(project.end_date) : 'On going'}
                                        </p>
                                    </div>
                                }
                                <p className="details description"><strong className="text-medium">Description:</strong><br />
                                    {project.description}
                                </p>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default DetailPage