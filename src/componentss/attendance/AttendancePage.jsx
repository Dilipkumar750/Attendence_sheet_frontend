import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/api/userApiSlice";



function AttendancePage() {
    const [username, setuserame] = useState("");
    const [email, setemail] = useState("");
    const [todayDate, setTodayDate] = useState();
    const [time, setTime] = useState();
    const [attendance, setAttendance] = useState("");
    const { data: users } = useSelector((state) => state.users.getAllUsers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        if (users) {
            setuserame(users[0]?.username);
            setemail(users[0]?.email);
        }
    }, [dispatch]);


    return (
        <div>
            <div className=" mx-auto  rounded-xl h-fit self-center dark:bg-gray-800/40">
                <form>
                    <div className="flex flex-col md:flex-row gap-2 justify-center w-full">
                        <div className="w-full">
                            <label className="mb-2 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                value={username}
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Name"
                            />
                        </div>
                        <div className="w-full ">
                            <label className=" dark:text-gray-300">Email</label>
                            <input
                                value={email}
                                type="text"
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="email"
                            />
                        </div>
                        <div className="w-full ">
                            <label className=" dark:text-gray-300">Attendance</label>
                            <input
                                value={attendance}
                                type="text"
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Attendance"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 justify-center w-full md:mt-4 ">
                        <div className="w-full">
                            <label className="mb-2 dark:text-gray-300">Arrival Date</label>
                            <input
                                type="date"
                                value={todayDate}
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Employee Code"
                            />
                        </div>
                        <div className="w-full ">
                            <label className="mb-2 dark:text-gray-300">Arrival Time</label>
                            <input
                                type="time"
                                value={time}
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="time"
                            />
                        </div>
                        <div className="w-full">
                            <label className="mb-2 dark:text-gray-300">Departure Date</label>
                            <input
                                type="date"
                                value={todayDate}
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="Employee Code"
                            />
                        </div>
                        <div className="w-full">
                            <label className="mb-2 dark:text-gray-300">Departure Time</label>
                            <input
                                type="time"
                                value={time}
                                disabled
                                className="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                placeholder="time"
                            />
                        </div>
                    </div>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                    </div>

                    <div className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-600  mt-4 text-white text-lg font-semibold">
                        <button type="submit" className="w-full p-2">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AttendancePage;
