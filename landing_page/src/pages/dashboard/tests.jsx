import { TopTitle } from "../../components/dashboard/manage-team/top-title"
import StatiquesTop from "../../components/dashboard/tests-page/statiquesTop"
import stat from "../../assets/testspage/stat.svg";
import checked from "../../assets/testspage/checked.svg";
import TestField from "../../components/dashboard/tests-page/test-field";
import { useState } from "react";
export const TestsPage =()=>{
    const [tests,setTests] = useState([
        {id:1},
        {id:2},
        {id:3}
    ])
    return(
    <div className=" mt-12 w-full px-6">
      <TopTitle title={"Track Your Progress"} section={"Tests"} />
        <div className="flex gap-2 mt-8 mb-10">
            <StatiquesTop title="Progress" progress="70%" icon={<img src={stat} />} />
            <StatiquesTop title="Passed" progress="6" icon={<img src={checked} />} />
        </div>
        <h1 className="mb-3">My Tests</h1>
        <div className="flex flex-col gap-4 mb-8">
        {tests.map(test=>{
            return(
                <TestField key={test.id} id={test.id} type={"failed"} />
            )
        })}
        </div>

    </div>
    )
}