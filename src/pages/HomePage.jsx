import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HomePage() {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(import.meta.env.VITE_API_URL + '/categories').then(resp => {
            const data = resp.data.data
            setCategories(data)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

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
                        {categories.map(category => (
                            <div className="folder d-flex flex-column align-center" key={category.id}>
                                <img className='folder-icon' src="img/folder.png" alt="Folder Icon" />
                                <p className="folder-label text-center">{category.name}</p>
                            </div>
                        ))}
                    </div>
                    {/* Reel */}
                    <div className='d-flex flex-column align-center'>
                        <div className="reel">
                            <img className="reel-icon" src='img/reel-cover.png' alt='Reel thumbnail' />
                            <p className='folder-label text-center'>Reel</p>
                        </div>
                        <div className="cv">
                            <img className="cv-icon" src='img/pdf-file-icon.png' alt='Pdf icon' />
                            <p className='folder-label text-center'>CV</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage