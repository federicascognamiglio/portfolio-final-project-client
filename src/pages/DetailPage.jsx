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


    return (
        <div className="detail-page">
            <div className="container">
                {project &&
                    (
                        <>
                            <div className="d-flex flex-column align-center">
                                <h1>{project.title}</h1>
                                <h5>{project.subtitle}</h5>
                                <span>{`${project.category.name} - ${project.type.name}`}</span>
                                {/* Images */}
                                {project.media.lenght === 0
                                    ?
                                    <img src={`${baseImgUrl / project.cover_image}`} alt={`Cover image of ${project.title}`} />
                                    :
                                    // Slider
                                    <ImageSlider images={project.media} />
                                }
                                <p>Client: {project.client ? project.client : 'Personal Project'}</p>
                                <p>Tags: {project.tags.map(tag => <span key={tag.id} style={{ backgroundColor: tag.color }}>{tag.name}</span>)}</p>
                                <p>Tools: {project.tools.map(tool => <span key={tool.id} style={{ backgroundColor: tool.color }}>{tool.name}</span>)}</p>
                                {project.start_date &&
                                    <>
                                        <p>Started at: {project.start_date}</p>
                                        <p>Ended at: {project.end_date ? project.end_date : 'On going'}</p>
                                    </>
                                }
                                <p><strong>Description:</strong><br />
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