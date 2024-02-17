/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const StatiquesTop = ({title,progress,icon}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between w-[365px] pb-20">
            <h1 className="text-black font-bold text-xl">{title}</h1> 
            {icon}
        </div>
        <h1 className="text-main-blue font-bold text-4xl">{progress}</h1>
    </div>
  );
};

export default StatiquesTop;