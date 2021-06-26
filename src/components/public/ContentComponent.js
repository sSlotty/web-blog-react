import React from 'react'
import { Link } from 'react-router-dom';

function ContentComponent() {
    return (
        <>

            <section>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')"
                        }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        Oatwant Studio
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        บล็อคนี้จัดทำขึ้นมาโดยไม้ได้ตั้งใจ โปรดอย่าคาดหวังหาความรู้่ ทั้งหมด อาจจะไม่มีความรู้เลยยก็เป็นไปได้ โปรดใช้ วิจารณาญาณในการเสพสื่ออย่างเหมาะสม โดยบางครั้งอาจจะแฝงเนื้อหาที่มีประโยชน์ไว้ โปรดเลือกอ่านดีๆ
                                        <li>
                                            technologies 💻 foods 🍛  travel 🏝
                                        </li>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "100px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>
            </section>

            <section className="bg-white mt-10">
                <div className="container my-12 mx-auto px-4 md:px-12 ">
                    <div className="text-center text-lg text-5xl">
                        <h1>บทความใหม่</h1>
                        <hr />
                    </div>

                    <div className="container my-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {[...Array(6)].map((data, index) =>
                                <div key={{ index }} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <Link to="#">
                                            <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </Link>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <Link className="no-underline hover:underline text-black" to="#">
                                                    Article Title
                                                </Link>
                                            </h1>
                                            <p className="text-grey-darker text-sm">
                                                11/1/19
                                            </p>

                                        </header>
                                        <content className="text-sm flex justify-between pl-3 pr-5">
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.

                                            </p>
                                        </content>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <Link className="flex items-center no-underline hover:underline text-black" to="#">
                                                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p className="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </Link>
                                            <Link className="no-underline text-grey-darker hover:text-red-dark" to="#">
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart" />
                                            </Link>
                                        </footer>
                                    </article>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                {/* viewBox="2560 1000 -2560 100" */}
                <blockquote className="relative p-8 mb-4">
                    <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        className="absolute left-0 w-full block"
                        style={{
                            height: "180px",
                            top: "-100px",
                        }}
                    >
                        {/* points="2560 0 2560 100 0 100"*/}
                        <polygon
                            points="0 0 3000 100 0 1500"
                            className="text-blue-400 fill-current"
                        ></polygon>
                    </svg>
                </blockquote>
            </section>

            <section className="bg-blue-400 " style={{ minHeight: "100vh" }}>
                <div className="container mx-auto md:px-12 ">
                    <div className="text-center text-lg text-5xl">
                        <h1 className="text-white">บทความที่ได้รับความนิยม </h1>
                    </div>

                    <div className="container my-12 mx-auto px-4 md:px-12">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {[...Array(6)].map((data, index) =>
                                <div key={{ index }} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <article className="overflow-hidden rounded-lg shadow-lg bg-yellow-50">
                                        <Link to="#">
                                            <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                        </Link>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <Link className="no-underline hover:underline text-black" to="#">
                                                    Article Title
                                                </Link>
                                            </h1>
                                            <p className="text-grey-darker text-sm">
                                                11/1/19
                                            </p>

                                        </header>
                                        <content className="text-sm flex justify-between pl-3 pr-5">
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.

                                            </p>
                                        </content>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <Link className="flex items-center no-underline hover:underline text-black" to="#">
                                                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                                <p className="ml-2 text-sm">
                                                    Author Name
                                                </p>
                                            </Link>
                                            <Link className="no-underline text-grey-darker hover:text-red-dark" to="#">
                                                <span className="hidden">Like</span>
                                                <i className="fa fa-heart" />
                                            </Link>
                                        </footer>
                                    </article>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                <blockquote className="relative p-8 mb-4">
                    <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        className="absolute left-0 w-full block"
                        style={{
                            height: "180px",
                            top: "-30px"
                        }}
                    >
                        {/* points="2560 0 2560 100 0 100"*/}
                        <polygon
                            points="2560 0 2560 100 -100 100"
                            className="text-white fill-current"
                        ></polygon>
                    </svg>
                </blockquote>
            </section>

            <section className="bg-white">
                <div className="container my-12 mx-auto">
                    <div className="text-center text-4xl">
                        <p>รายละเอียด</p>
                    </div>

                </div>
            </section>

            <footer className="relative bg-gray-300 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: "80px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points=" 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full px-4">
                            <h4 className="text-3xl font-semibold">
                                Tag
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">

                            </h5>

                        </div>

                        <div className="xl:w-6/12 lg:w-6/12 w-full px-4">
                            <h4 className="text-left  lg:text-right  text-3xl font-semibold">
                                Social media
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">

                            </h5>
                        </div>

                    </div>
                    <hr className="my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}{" "}
                                <Link to="#" className="text-gray-600 hover:text-gray-900">
                                    Oantwant Studio
                                </Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default ContentComponent