import { FaHtml5, FaCss3Alt,FaPython } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { SiTypescript,SiShadcnui,SiSanity } from "react-icons/si";


const skillsIcons = [
    {icon:<FaHtml5 size={140}/>,lable:'HTML'},
    {icon:<FaCss3Alt size={140}/>,lable:'CSS'},
    {icon:<SiTypescript size={140}/>,lable:'Typescript'},
    {icon:<FaPython size={140}/>,lable:'Python'},
    {icon:<RiNextjsFill size={140}/>,lable:'Nextjs'},
    {icon:< RiTailwindCssFill  size={140}/>,lable:'Tailwind Css'},
    {icon:<SiShadcnui  size={140}/>,lable:'Shadcn UI'},
    {icon:<SiSanity  size={140}/>,lable:'Saniity.io'},

]

export default function Skills() {
  return (
   <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
    <div className="text-white max-w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillsIcons.map((skill,index)=>(
                <div className="h-[160px] w-[160px] md:h-[220px] md:w-[300px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl mx-auto" key={index}>
                    {skill.icon}
                    <p className="mt-2">{skill.lable}</p>
                </div>
            ))}
        </div>
    </div>
   </div>
  )
}
