import { useLocation } from "react-router-dom";

function ProjectsPage() {
    // Get params
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get("categoryName");

    return (
        <div className="projects-page">
            <div className="container">
                <h1>{`Projects page category: ${categoryName}`}</h1>
            </div>
        </div>
    )
}

export default ProjectsPage