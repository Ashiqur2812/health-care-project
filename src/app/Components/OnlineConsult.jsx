import Image from "next/image";

const OnlineConsult = () => {
    return (
        <div className="mx-auto max-w-7xl px-4">
            {/* Ensuring flex applies properly */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <Image src="https://i.ibb.co/ZRKbffQB/7915233-3784074.jpg"
                        alt="Consultation"
                        width={300}
                        height={400}
                        className="w-full lg:max-w-md rounded-lg shadow-lg"
                    >
                    </Image>
                </div>

                <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4 text-center md:text-left">Online Consultation</h1>

                    <div className="w-full space-y-4">
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold text-xl">
                                What to do if your head or neck hurts too often?
                            </div>
                            <div className="collapse-content text-lg md:text-xl p-3 text-gray-400">
                                If a headache has become a fairly common occurrence in your life, you feel discomfort in the occipital or temporal region, then you can undergo a preventive examination under the “If your head hurts often” program.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold text-xl">
                                What to do if it hurts in the chest or pricks the heart?
                            </div>
                            <div className="collapse-content text-lg md:text-xl p-3 text-gray-400">
                                To minimize the likelihood of developing cardiovascular diseases, it is enough to undergo a preventive examination once a year.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold text-xl">
                                How to prepare for an appointment with a cardiologist?
                            </div>
                            <div className="collapse-content text-lg md:text-xl p-3 text-gray-400">
                                Special preparation is not required, but for maximum informativeness of the consultation, it is advisable to have an archive of all available medical documents.
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold text-xl">
                                What to do if your head or neck hurts too often?
                            </div>
                            <div className="collapse-content text-lg md:text-xl p-3 text-gray-400">
                                If a headache has become a fairly common occurrence in your life, you feel discomfort in the occipital or temporal region, then you can undergo a preventive examination under the “If your head hurts often” program.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OnlineConsult;
