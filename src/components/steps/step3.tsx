


const Step3=()=>{


    const Courses =[
        {
            value:'psdc',
            Title:'PSDC'
        },
        {
            value:'shopify',
            Title:'Shopify'
        },
        {
            value:'databse',
            Title:'SQL Database'
        },
        {
            value:'e-commerce',
            Title:'E-Commerce'
        },
    ]

    return(
        <div>
            <h1>Choice Your Prefernce</h1>
            <label htmlFor="fullname">FullName</label>
            <input id="fullname" type="" />

                <label htmlFor="courses">Choice Your Cource</label>
                <select name="" id="courses">
                  {Courses.map((course)=>
                    <option value={course.value}>{course.Title}</option>
                )}
                </select>

                                        
        </div>
    )
}

export default Step3