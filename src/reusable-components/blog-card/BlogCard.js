import "./blogCard.css"
function BlogCard({src, brief, title, displayClass}) {
    return <div className={`blog-card card ${displayClass}`}>

        <img className="blog-img card-img-top" src={src} alt="..." />

        <div className="blog-body card-body">
            <h4 className="blog-title card-title ts-16 tw-500">{title}</h4>
            <p className="blog-text card-text tw-275 ts-16">{brief}</p>
        </div>
    </div>
}


export default BlogCard;