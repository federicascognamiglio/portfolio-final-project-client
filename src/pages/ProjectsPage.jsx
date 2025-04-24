import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectsPreview from "../components/ProjectsPreview";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

function ProjectsPage() {
    // State Variables
    const [projects, setProjects] = useState([]);

    // Global Context Variables
    const { categories, baseApiUrl } = useGlobalContext();

    // Get params
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryName = queryParams.get("categoryName");

    // Get projects based on category
    const getProjectsByCategory = (categoryName) => {
        axios.get(`${baseApiUrl}/projects?category_name=${categoryName}`)
            .then(resp => {
                // Handle response
                setProjects(resp.data.data);
            })
    }

    // Load projects when component mounts
    useEffect(() => {
        if (categoryName) {
            getProjectsByCategory(categoryName);
        }
    }, [categoryName]);

    // Grid Switch Handler
    const [gridType, setGridType] = useState("grid");
    const handleGridSwitch = (type) => {
        setGridType(type);
    }

    return (
        <div className="projects-page">
            <div className="d-flex">
                {/* Side Menu */}
                <div className="side-menu">
                    {/* Buttons */}
                    <div className="side-menu-header p-relative d-flex align-center justify-center">
                        <button className="close-btn"></button>
                        <button className="hide-btn"></button>
                        <button className="expand-btn"></button>
                    </div>
                    {/* Categories */}
                    <div className="side-menu-body">
                        {categories && categories.map(category => (
                            <div key={category.id} className="side-menu-elements">
                                <p className={`category-item ${category.name === categoryName ? "active" : ""}`}>
                                    {category.name}
                                </p>
                                {/* Types */}
                                <div className="side-menu-types">
                                    {category.types && category.types.map(type => (
                                        <p key={type.id} className="type-item">
                                            {type.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Projects List */}
                <div className="projects-list">
                    {/* Header */}
                    <div className="projects-list-header p-relative d-flex align-center justify-between">
                        <div className="navigation">
                            <button className="back-btn">&lt;</button>
                            <button className="forward-btn">&gt;</button>
                            <span className="category-name">{categoryName}</span>
                        </div>
                        <div className="actions d-flex">
                            <div className="buttons">
                                <button onClick={() => handleGridSwitch('grid')} className="layout-grid p-relative"><FontAwesomeIcon icon={faTableCellsLarge} /></button>
                                <button onClick={() => handleGridSwitch('preview')} className="layout-list"><FontAwesomeIcon icon={faGripVertical} /></button>
                                <button className="filters-btn"><FontAwesomeIcon icon={faFilter} /></button>
                            </div>
                            <div className="p-relative">
                                <input type="text" className="search-bar" />
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar-icon" />
                            </div>
                        </div>
                    </div>
                    {gridType === 'grid' && <ProjectsGrid projects={projects} />}
                    {gridType === 'preview' && <ProjectsPreview projects={projects} />}
                </div>
            </div>
        </div >
    )
}

export default ProjectsPage;