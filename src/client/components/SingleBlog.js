const SingleBlog = ({blog})=>{
    console.log(blog)

    const date = blog.pubDate;
    const publishdate = new Date(date).getDate();
    const monthName = new Date(date).getMonth();
    const pubYear = new Date(date).getFullYear();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var pubMonth = monthNames[monthName];
    const pubDates = pubMonth + ' ' + publishdate + ', ' + pubYear;
    console.log(pubDates)

    return(
        <div className="d-flex justify-content-center pt-5 pb-5">
            <div style={{width:'60%',wordBreak:"break-all"}}>
                <h2 dangerouslySetInnerHTML={{__html:blog.title}}></h2>
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                <div style={{fontStyle:"italic"}} >{pubDates}</div> 
                <div dangerouslySetInnerHTML={{__html:blog.author}}style={{marginRight:"20%"}}></div>
                </div>
                <div className="mt-4" dangerouslySetInnerHTML={{__html:blog.content}} ></div>
                <h4 className="mb-4">Categories:</h4>
                <div style={{display:"flex"}}>
                {blog.categories.map((item)=>{
                    return(
                        <div style={{border:"1px solid #dedada",padding:"5px",background:"#dedada",marginRight:"10px"}}>{item}</div>
                    )
                })}
                </div>
        </div>
        </div>

    )
}


export default SingleBlog