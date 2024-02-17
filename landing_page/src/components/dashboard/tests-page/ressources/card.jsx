export const RessourceCard =({title,description,imgCover})=>{
    return(
        <div className="rounded-lg">
            <div><img src={imgCover} alt="img cover" /></div>
            {title}
            
            <p>{description}</p>
        </div>
    )
}