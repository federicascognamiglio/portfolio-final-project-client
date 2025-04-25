import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectsPreview from "../components/ProjectsPreview";
import { useNavigate } from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

function ProjectsPage() {
    //Navigate
    const navigate = useNavigate();

    // Get params
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get("categoryName");

    // State Variables
    const [projects, setProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categoryParam)
    const [selectedType, setSelectedType] = useState('')

    // Global Context Variables
    const { categories, baseApiUrl } = useGlobalContext();

    // Get projects by category
    const getProjectsByCategory = (selectedCategory) => {
        const url = new URL(`${baseApiUrl}/projects`);
        if (selectedCategory) {
            url.searchParams.append("category_name", selectedCategory);
        }
        axios.get(url.toString())
            .then(resp => {
                setProjects(resp.data.data);
            })
            .catch(err => {
                console.error("Errore nel recupero dei progetti:", err);
            });
    }

    // Get projects by type
    const getProjectsByType = (selectedType) => {
        const url = new URL(`${baseApiUrl}/projects`);
        if (selectedType) {
            url.searchParams.append("type_name", selectedType);
        }
        axios.get(url.toString())
            .then(resp => {
                setProjects(resp.data.data);
            })
            .catch(err => {
                console.error("Errore nel recupero dei progetti:", err);
            });
    }

    // Load projects when component mounts
    useEffect(() => {
        if (selectedType) {
            getProjectsByType(selectedType)
        }
        if (selectedCategory) {
            getProjectsByCategory(selectedCategory);
        }
    }, [selectedCategory, selectedType]);

    // Handle Category Click
    const handleCategoryClick = (categoryName) => {
        setSelectedType('')
        setSelectedCategory(categoryName);
        navigate(`?categoryName=${categoryName}`);
    };
    
    // Handle Type Click
    const handleTypeClick = (typeName) => {
        setSelectedCategory('')
        setSelectedType(typeName);
        navigate(`?typeName=${typeName}`);
    };

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
                        <a href="/" className="close-btn d-flex align-center justify-center">
                            <FontAwesomeIcon icon={faXmark} className="btn-icon" style={{ color: '#5d0605' }} />
                        </a>
                        <button className="hide-btn d-flex align-center justify-center">
                            <FontAwesomeIcon icon={faMinus} className="btn-icon" style={{ color: '#504700' }} />
                        </button>
                        <button className="expand-btn d-flex align-center justify-center">
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="btn-icon" style={{ color: '#012f0d', fontSize: '.4rem' }} />
                        </button>
                    </div>
                    {/* Categories */}
                    <div className="side-menu-body">
                        {categories && categories.map(category => (
                            <div key={category.id} className="side-menu-elements">
                                <p onClick={() => handleCategoryClick(category.name)} className={`category-item ${category.name === selectedCategory ? "active-side-bar" : ""}`}>
                                    {category.name}
                                </p>
                                {/* Types */}
                                <div className="side-menu-types">
                                    {category.types && category.types.map(type => (
                                        <p onClick={() => handleTypeClick(type.name)} key={type.id} className={`type-item ${type.name === selectedType ? "active-side-bar" : ""}`}>
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
                            <span className="category-name">{selectedCategory}</span>
                        </div>
                        <div className="actions d-flex">
                            <div className="buttons">
                                <button onClick={() => handleGridSwitch('grid')} className="layout-grid grid-icon p-relative"><FontAwesomeIcon icon={faTableCellsLarge} /></button>
                                <button onClick={() => handleGridSwitch('preview')} className="layout-list grid-icon"><FontAwesomeIcon icon={faGripVertical} /></button>
                                <button className="filters-btn grid-icon"><FontAwesomeIcon icon={faFilter} /></button>
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