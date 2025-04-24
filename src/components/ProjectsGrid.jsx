import { useGlobalContext } from "../contexts/GlobalContext";

function ProjectsGrid({ projects, category }) {
    // Global Context Variables
    const { baseImgUrl } = useGlobalContext();
    return (
        <>
            {/* Body */}
            <div className="projects-list-body d-flex">
                {projects && projects.map(project => (
                    <div key={project.id} className="project-card d-flex flex-column justify-center align-center">
                        <div className="project-thumbnail">
                            <img src={`${baseImgUrl}/${project.cover_image}`} alt={`${project.name} thumbnail`} className="thumbnail-img" />
                        </div>
                        <h5 className="project-name">{project.title}</h5>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectsGrid;