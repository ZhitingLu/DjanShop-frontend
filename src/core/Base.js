import React from 'react';


const Base = ({
    title = "My title",
    description = "My description",
    className = "bg-dark text-white p-4 mt-5 container",
    children
    // 'children' is responsible for injecting components
}) => {
    return (
        <div>
            <div className='pb-2 bg-dark'>
                <div className='jumbotron bg-dark text-white text-center'>
                    <h2 className='display-6 pt-4 text-warning'>{title}</h2>
                    <p className='lead text-white'>{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className='footer bg-dark mt-auto py-3'>
                <div className='container-fluid bg-success text-white text-center py-3'>
                    <h4>If you have any questions, reach me out at github</h4>
                    <button className='btn btn-warning btn-lg'>Contact me</button>
                    <div className='container mt-2'>
                        <span className='text-white'>
                            Personal django-react project
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Base;