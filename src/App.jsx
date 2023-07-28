import { Zap, Heart, MessageCircle, Eye } from "react-feather";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="md:w-[600px] md:h-[400px] w-full h-full flex flex-col md:flex-row shadow-2xl bg-transparent rounded-3xl">
          <div className="h-1/2 md:w-1/2 md:h-full md:rounded-3xl rounded-b-3xl flex flex-col justify-center items-center bg-gradient-to-t from-[#3214f3] to-[#5037f0]">
            <h1 className="text-xl text-white m-3">Your Result</h1>

            <div className="min-w-[150px] min-h-[150px] rounded-full flex flex-col justify-center items-center m-3 bg-gradient-to-b from-[#1f09c8] to-[#5944ff]">
              <span className="text-5xl text-white font-bold">76</span>
              <span className="text-gray-200">of 100</span>
            </div>

            <h2 className="text-2xl text-white m-1 font-bold">Great</h2>
            <p className="text-gray-200 text-center my-3 mx-12 font-normal">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>

          <div className="h-auto  md:w-1/2 md:h-full p-5 md:rounded-r-3xl">
            <h1 className=" mt-2 mb-5 font-bold text-xl mx-3 text-gray-700">
              Summary
            </h1>

            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-red-100 p-3 gap-3 flex flex-row justify-between items-center hover:bg-red-200 cursor-pointer">
                <div className="flex gap-2">
                  <Zap className="text-red-500" />
                  <h1 className="font-normal text-red-500">Reaction</h1>
                </div>
                <div className="text-gray-800">
                  <span className="font-bold ">80</span> / 100
                </div>
              </div>

              <div className="rounded-2xl bg-yellow-100 p-3 gap-3 flex flex-row justify-between items-center hover:bg-yellow-200 cursor-pointer">
                <div className="flex gap-2">
                  <Heart className="text-yellow-500" />
                  <h1 className="font-normal text-yellow-500">Memory</h1>
                </div>
                <div className="text-gray-800">
                  <span className="font-bold">92</span> / 100
                </div>
              </div>

              <div className="rounded-2xl bg-green-100 p-3 gap-3 flex flex-row justify-between items-center hover:bg-green-200 cursor-pointer">
                <div className="flex gap-2">
                  <MessageCircle className="text-green-500" />
                  <h1 className="font-normal text-green-500">Verbal</h1>
                </div>
                <div className="text-gray-800">
                  <span className="font-bold">61</span> / 100
                </div>
              </div>

              <div className="rounded-2xl bg-blue-100 p-3 gap-3 flex flex-row justify-between items-center hover:bg-blue-200 cursor-pointer">
                <div className="flex gap-2">
                  <Eye className="text-blue-500" />
                  <h1 className="font-normal text-blue-500">Visual</h1>
                </div>
                <div className="text-gray-800">
                  <span className="font-bold">72</span> / 100
                </div>
              </div>
            </div>

            <button className=" text-white rounded-3xl p-3 mt-5 w-full bg-[#303B59] hover:bg-gradient-to-tr from-[#350ad0] to-[#9500a6]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;