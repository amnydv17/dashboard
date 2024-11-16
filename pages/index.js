import Image from "next/image";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "./components/Layout";
import ComparisonGraph from "./components/ComprisonGraph";
import SyllabusAnalysis from './components/SyllabusAnalysis';



export default function Dashboard() {
  const totalQuestions = 15;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(4);
  const [percentile, setPercentile] = useState(90);
  const [correctAnswers, setCorrectAnswers] = useState("12");

  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAnswers, setTempCorrectAnswers] = useState(correctAnswers);

  const openModal = () => {
    // Set temporary states to current values
    setTempRank(rank);
    setTempPercentile(percentile);
    setTempCorrectAnswers(correctAnswers);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSave = () => {
    // Update main display values with temporary values
    setRank(tempRank);
    setPercentile(tempPercentile);
    setCorrectAnswers(tempCorrectAnswers);

    // Close the modal
    setIsModalOpen(false);
  };
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <Layout>
      <div className=" flex flex-col sm:flex-row min-h-screen bg-white border-gray-200">
        
        {/*Main Box */}
        <div className=" bg-white overflow-hidden p-8">
          <h1 className="text-xl mb-5 ml-5">Skill Test</h1>

          {/* Start Box */}
          <div className="w-full bg-white p-4 ">
            {/* First Div*/}
            <div className="flex justify-self-centerspace-x-3 bg-white rounded-lg border border-gray-200   p-7 w-full">
              {/* Image Div*/}
              <div className="w-50 h-50  overflow-hidden  border-gray-200 px-2">
                <Image
                  src="/icon1.png"
                  alt="Profile"
                  width={50}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col mx-2">
                <div>
                  <p className="font-bold text-lg">
                    Hyper Text Markup Language
                  </p>
                </div>
                <div>
                  <span className="text-lg">Questions: 08 |</span>
                  <span className="text-lg"> Duration: 15 min |</span>
                  <span className="text-lg"> Submitted on 5 June 2021</span>
                </div>
              </div>

              <div className="flex items-center ml-auto">
                <div className="px-4 py-3 bg-blue-600 text-white font-semibold text-center rounded-lg cursor-pointer hover:bg-blue-700 active:bg-blue-800">
                  <button onClick={openModal} className="text-sm">
                    Update
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Statistics */}
            <div className="grid w-[900px] h-[180px] rounded-lg border my-5 ">
              <div className="col-span-1 bg-white h-10 p-3 font-bold text-lg rounded-lg">
                Quick Statistics
              </div>

              {/* <div className="grid grid-cols-3  bg-white h-[120px] p-2  divide-x">
                <div className="grid grid-cols-2  bg-white p-2 text-center">
                  <div className="flex items-center justify-center p-2  border-gray-200">
                    <div className="w-50 h-50 rounded-full overflow-hidden bg-black ">
                      <Image
                        src="/trophy.png" // Replace with the path to the profile picture
                        alt="Trophy"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-xl">4</div>
                    <div>Your Rank</div>
                  </div>
                </div>

                <div className="grid grid-cols-2  bg-white p-2 text-center">
                  <div className="flex items-center justify-center  p-2  border-gray-200">
                    <div className="w-50 h-50 rounded-full overflow-hidden bg-black ">
                      <Image
                        src="/notes.png" // Replace with the path to the profile picture
                        alt="NoteBook"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center ">
                    <div className="font-bold text-xl">90%</div>
                    <div>Percentile</div>
                  </div>
                </div>

                <div className="grid grid-cols-2  bg-white p-2 text-center">
                  <div className="flex items-center justify-center p-2  border-gray-200">
                    <div className="w-50 h-50 rounded-full overflow-hidden bg-black ">
                      <Image
                        src="/check.png" // Replace with the path to the profile picture
                        alt="CheckBox"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center ">
                    <div className="font-bold text-xl">12/15</div>
                    <div>Correct Answers</div>
                  </div>
                </div>
              </div> */}
              <div className="grid grid-cols-3 divide-x bg-white">
                <StatisticItem
                  label="Your Rank"
                  value={rank}
                  icon="/trophy.png"
                />
                <StatisticItem
                  label="Percentile"
                  value={`${percentile}%`}
                  icon="/notes.png"
                />
                <StatisticItem
                  label="Correct Answers"
                  value={`${correctAnswers}/15`}
                  icon="/check.png"
                />
              </div>
            </div>

            {/* Comparison Graph */}
            <div className=" p-2">
              <ComparisonGraph percentile={percentile} />
            </div>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-5 rounded-lg w-80 relative">
                  {/* HTML5 Icon */}
                  <div className="absolute top-4 right-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                      alt="HTML5 Logo"
                      className="w-8"
                    />
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Update Scores</h2>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-gray-600 cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-600 mb-1">
                        Update your <strong className="text-bold">Rank</strong>
                      </label>
                      <input
                        type="number"
                        value={tempRank}
                        onChange={(e) => setTempRank(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-1">
                        Update your{" "}
                        <strong className="text-bold">Percentile</strong>
                      </label>
                      <input
                        type="number"
                        value={tempPercentile}
                        onChange={(e) => setTempPercentile(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-1">
                        Update your Current Score (out of 15)
                      </label>
                      <input
                        type="number"
                        value={tempCorrectAnswers}
                        onChange={(e) => setTempCorrectAnswers(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSave}
                    className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>



        <div className="w-[470px] bg-white rounded-xl  my-24">
          <div>
            <SyllabusAnalysis />
          </div>
          <div className="border rounded-3xl pb-1 mr-3">
              <div className="pl-2 pt-4">
                  <div>
                    
                    <div className="grid grid-cols-2 items-end justify-end ">
                        <div className="text-lg font-semibold pl-2">
                              Question Analysis 
                        </div>
                        <div className="flex justify-end font-bold pr-12">
                        {`${correctAnswers}/15`}
                        </div>
                      <div>
                      
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 mt-2 pl-2">
                      <strong>You scored <span className="font-bold">{correctAnswers}</span> correct out of {totalQuestions}</strong>. 
                      {percentage != 100 ? " However, it still needs some improvements." : " Great job!"}
                    </p>
                    </div>
                  </div>
                
                  <div className="flex items-center justify-center mb-10">
                    <div className="relative w-36 h-36 mt-4">
                      <div
                        className="absolute inset-0 rounded-full bg-blue-800"
                        style={{
                          background: `conic-gradient(#008000 ${percentage}%,#ff0000 ${percentage}%)`,
                        }}
                      />
                    
                      <div className="absolute inset-3 flex items-center justify-center bg-white rounded-full m-4">
                          <img
                            src="/target.png" // Replace with the path to your target icon or adjust as needed
                            alt="Target icon"
                            className="w-10 h-10"
                          />
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>


      </div>

    </Layout>
  );
}

function StatisticItem({ label, value, icon }) {
  return (
    <div className="flex items-center justify-center p-4">
      <Image src={icon} alt={label} width={40} height={40} className="mr-2" />
      <div className="text-center">
        <div className="font-bold text-xl">{value}</div>
        <div>{label}</div>
      </div>
    </div>
  );
}
