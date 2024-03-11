import React from "react";
import Heading from "../components/Heading";
import InputField from "../components/InputField";

function SendMoney() {
  return (
    <div className="h-screen bg-grey-100">
      <div className="flex justify-center items-center h-full">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex justify-center p-6 space-y-1.5">
            <div className="font-bold text-xl">Send Money</div>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full w-12 h-12 bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">A</span>
              </div>
              <h3 className="font-semibold text-2xl">Friend's Name</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  type="number"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                />
              </div>
              <button class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;