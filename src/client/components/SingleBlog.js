


const SingleBlog = ({blog})=>{

    return(
        <div className="d-flex justify-content-center pt-5">
            <div style={{width:'60%'}}>
                <h2 dangerouslySetInnerHTML={{__html:blog.title}}></h2>
                <div className="mt-5" dangerouslySetInnerHTML={{__html:blog.content}}></div>
            </div>

        </div>
    )
}


export default SingleBlog