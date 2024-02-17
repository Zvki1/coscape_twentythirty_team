import { TopTitle } from "../../../components/dashboard/manage-team/top-title";
import { RessourceCard } from "../../../components/dashboard/tests-page/ressources/card";
export const Ressources =()=>{
    const [courses,setCourses] = useState([{
        title:"JS Advanced Course",
        description:"udemy",
        imgCover:"https://miro.medium.com/v2/resize:fit:785/1*H-25KB7EbSHjv70HXrdl6w.png"
    },
    {
        title:"JS Advanced Course",
        description:"udemy",
        imgCover:"https://miro.medium.com/v2/resize:fit:785/1*H-25KB7EbSHjv70HXrdl6w.png"
    }])
    const [articles,setArticles] = useState([{
        title:"JS Advanced Course",
        description:"udemy",
        imgCover:"https://miro.medium.com/v2/resize:fit:785/1*H-25KB7EbSHjv70HXrdl6w.png"
    },
    {
        title:"JS Advanced Course",
        description:"udemy",
        imgCover:"https://miro.medium.com/v2/resize:fit:785/1*H-25KB7EbSHjv70HXrdl6w.png"
    }])
    return(
    <div className=" mt-12 w-full px-6">
     {/* <img src={Left} alt="go back" /> */}
     <TopTitle title={"Improve yourself & pass the tests"} section={"Resources"} />
     <div className="p-4">
        <p>courses</p>

        <div className="flex gap-4 items-center ">{courses.map((index,course)=>{
            < essourceCard key={index} title={course.title} imgCover={course.imgCover} description={course.description} />
        })}</div>

<p>articles</p>
        <div className="flex gap-4 items-center ">{articles.map((index,course)=>{
            < RessourceCard key={index} title={course.title} imgCover={course.imgCover} description={course.description} />
        })}</div>
     </div>
    </div>
    )
}