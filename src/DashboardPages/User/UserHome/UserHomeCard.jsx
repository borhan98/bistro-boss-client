import { TbCardsFilled } from "react-icons/tb";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";


const HomeCard = () => {
    return (
        <div className="grid gap-6 md:grid-cols-3 text-white">
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-purple-700 to-slate-200 rounded-md">
                <span className="text-5xl"><TbCardsFilled /></span>
                <div>
                    <h4 className="text-4xl font-bold ">203</h4>
                    <span className="capitalize text-lg">menu</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-[#D1A054] to-slate-200 rounded-md">
                <span className="text-5xl"><SiHomeassistantcommunitystore /></span>
                <div>
                    <h4 className="text-4xl font-bold ">203</h4>
                    <span className="capitalize text-lg">shop</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-pink-700 to-slate-200 rounded-md">
                <span className="text-5xl"><BiSolidPhoneCall /></span>
                <div>
                    <h4 className="text-4xl font-bold ">203</h4>
                    <span className="capitalize text-lg">contact</span>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;