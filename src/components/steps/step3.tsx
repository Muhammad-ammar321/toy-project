
import { Courses } from "./stepCard/Course"

const Step3=()=>{



    return(
        <form action=" ">
            <h1>Choice Your Prefernce</h1>
            <label htmlFor="fullname">FullName</label>
            <input id="fullname" type="" />

                <label htmlFor="courses">Choice Your Cource</label>
                <select name="" id="courses">
                  {Courses.map((course)=>
                    <option value={course.value}>{course.Title}</option>
                )}
                </select>

        </form>
              
    )
}

export default Step3