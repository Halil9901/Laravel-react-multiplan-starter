import React from 'react';

export function Hero() {
    return (
        <section className="pt-24 pb-32 bg-white tails-selected-element" >
            <div className="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
                <div className="flex flex-col lg:flex-row">

                    <div className="flex items-center w-full lg:w-1/2 lg:pr-10">
                        <div
                            className="relative max-w-lg mx-auto font-sans text-center text-gray-700 border-gray-200 lg:text-left">
                            <h1 className="m-0 text-3xl font-extrabold leading-tight text-left text-blue-900 border-solid sm:text-4xl md:text-6xl">
                                Create podcast clips in seconds.
                            </h1>
                            <p className="pr-5 mx-0 my-4 text-base text-left text-gray-500 xl:leading-9 lg:my-8 xl:text-xl">
                                Engage with your customers and learn from their feedback to help you build a better
                                product.
                            </p>
                            <div
                                className="relative flex items-start justify-start block w-full max-w-md text-center lg:mx-0">
                                <a href="#_"
                                   className="flex items-center justify-center px-8 font-medium text-white bg-blue-500 rounded-full h-14"
                                   data-primary="blue-500" data-rounded="rounded-full">Get Started Today</a>

                            </div>
                            <div className="mt-10 leading-6 text-left border-solid">
                                <p className="m-0 font-sans text-sm font-bold tracking-wider text-gray-400 uppercase lg:text-xs">
                                    Recently Featured On
                                </p>
                                <div className="flex mt-5 space-x-4">
                                    <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 1026 240"
                                         version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path d="M.24.125h37.933V74H.24z"></path>
                                        </defs>
                                        <g stroke="none" stroke-width="1" fill-rule="evenodd">
                                            <g>
                                                <path
                                                    d="M240 120c0 66.274-53.726 120-120 120S0 186.274 0 120 53.726 0 120 0s120 53.726 120 120"></path>
                                                <path
                                                    d="M136 120h-34V84h34c9.941 0 18 8.06 18 18s-8.059 18-18 18m0-60H78v120h24v-36h34c23.196 0 42-18.803 42-42 0-23.195-18.804-42-42-42"
                                                    fill="#FFF"></path>
                                                <path
                                                    d="M366.068 105.332c0-6.6-5.075-10.605-11.666-10.605H336.73v21.09h17.67c6.592 0 11.667-4.005 11.667-10.485zM320 160V80h36.753c17.086 0 26.39 11.546 26.39 25.332 0 13.666-9.42 25.21-26.39 25.21H336.73V160H320z"></path>
                                                <path
                                                    d="M393.323 160v-58.324h14.957v7.661c4.125-4.95 11.08-9.071 18.15-9.071v14.606c-1.065-.235-2.36-.35-4.125-.35-4.95 0-11.55 2.825-14.025 6.481V160h-14.957z"></path>
                                                <path
                                                    d="M476.757 130.073c0-8.836-5.19-16.496-14.61-16.496-9.316 0-14.496 7.66-14.496 16.496 0 8.955 5.18 16.611 14.495 16.611 9.421 0 14.611-7.656 14.611-16.61m-44.658 0c0-16.142 11.311-29.808 30.047-29.808 18.851 0 30.162 13.666 30.162 29.807S480.998 160 462.146 160c-18.736 0-30.047-13.786-30.047-29.927"></path>
                                                <path
                                                    d="M542.655 140.204v-20.146c-2.476-3.77-7.896-6.48-12.846-6.48-8.595 0-14.486 6.714-14.486 16.495 0 9.896 5.891 16.611 14.486 16.611 4.95 0 10.37-2.71 12.846-6.48zm0 19.796v-8.72c-4.48 5.654-10.6 8.72-17.557 8.72-14.255 0-25.21-10.84-25.21-29.927 0-18.496 10.725-29.807 25.21-29.807 6.716 0 13.077 2.825 17.557 8.716V80h15.081v80h-15.08z"></path>
                                                <path
                                                    d="M611.027 160v-8.601c-3.885 4.241-10.716 8.601-20.02 8.601-12.492 0-18.382-6.835-18.382-17.911v-40.413h14.956v34.522c0 7.896 4.125 10.487 10.486 10.487 5.774 0 10.37-3.181 12.96-6.481v-38.528h14.966V160h-14.966z"></path>
                                                <path
                                                    d="M637.227 130.073c0-17.436 12.721-29.807 30.163-29.807 11.664 0 18.735 5.065 22.505 10.251l-9.784 9.185c-2.706-4.005-6.832-6.125-12.011-6.125-9.077 0-15.437 6.6-15.437 16.496 0 9.896 6.36 16.611 15.437 16.611 5.18 0 9.305-2.355 12.01-6.246l9.785 9.192c-3.77 5.184-10.84 10.37-22.505 10.37-17.442 0-30.163-12.37-30.163-29.927"></path>
                                                <path
                                                    d="M702.76 144.33v-29.573h-9.42v-13.08h9.42V86.124h14.967v15.551h11.54v13.081h-11.54v25.567c0 3.65 1.88 6.36 5.18 6.36 2.236 0 4.365-.825 5.18-1.765l3.186 11.426c-2.236 2.005-6.245 3.655-12.491 3.655-10.486 0-16.021-5.42-16.021-15.67"></path>
                                                <path
                                                    d="M825.111 160v-34.522h-37.117V160h-16.722V80h16.722v30.867h37.117V80h16.846v80z"></path>
                                                <path
                                                    d="M895.498 160v-8.601c-3.885 4.241-10.716 8.601-20.021 8.601-12.491 0-18.381-6.835-18.381-17.911v-40.413h14.956v34.522c0 7.896 4.125 10.487 10.485 10.487 5.775 0 10.371-3.181 12.961-6.481v-38.528h14.966V160h-14.966z"></path>
                                                <path
                                                    d="M963.746 160v-35.817c0-7.896-4.115-10.606-10.485-10.606-5.89 0-10.362 3.3-12.96 6.6V160h-14.957v-58.324H940.3v7.306c3.655-4.24 10.725-8.716 19.916-8.716 12.605 0 18.611 7.066 18.611 18.142V160h-15.08z"></path>
                                                <g transform="translate(987 86)">
                                                    <mask fill="#fff">
                                                        <use xlink:href="#path-1"></use>
                                                    </mask>
                                                    <path
                                                        d="M9.661 58.33V28.756H.241v-13.08h9.42V.124h14.966v15.551h11.541v13.081h-11.54v25.567c0 3.65 1.88 6.36 5.18 6.36 2.235 0 4.365-.825 5.19-1.765l3.175 11.426C35.938 72.35 31.928 74 25.683 74 15.196 74 9.66 68.58 9.66 58.33"
                                                        mask="url(#mask-2)"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <svg className="w-auto h-8 text-gray-300 fill-current" viewBox="0 0 2500 829"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M235.978 764.863L129.39 700.954l-64.695-64.62L0 571.714V0h271.862l64.446 64.41 64.444 64.409h291.49c287.02 0 291.506-.034 292.67-2.205.77-1.443 1.179-23.71 1.179-64.41V0h485.617l.295 64.124.294 64.125 63.84.57 63.84.57.301 33.915c.167 18.653.668 33.914 1.115 33.914.447 0 16.234-15.39 35.081-34.2l34.268-34.199h143.507l64.446-64.41L1943.142 0h270.72v62.205c0 40.699.408 62.966 1.18 64.41 1.15 2.146 3.229 2.204 78.95 2.204h77.767l64.12 64.128L2500 257.076v428.76l-106.874 71.49-106.874 71.49-71.487-.022-71.486-.02-.333-34.108c-.183-18.757-.698-34.47-1.143-34.915-.444-.444-22.818 14.904-49.717 34.107l-48.905 34.915h-129.136v-34.2c0-26.69-.315-34.2-1.432-34.2-.788 0-16.815 15.39-35.618 34.2l-34.185 34.2h-229.167l-34.73-34.744c-19.102-19.11-35.13-34.347-35.618-33.858-.487.487-3.7 14.968-7.137 32.179-3.438 17.211-6.526 32.447-6.863 33.857l-.61 2.565h-200.04l-34.185-34.2c-18.802-18.81-34.83-34.2-35.618-34.2-1.117 0-1.432 7.511-1.432 34.2v34.2h-100.32c-55.175 0-100.318-.151-100.318-.338 0-1.795-13.816-68.576-14.285-69.044-.342-.344-16.381 15.128-35.641 34.379l-35.017 35.004H599.65l-34.216-13.68c-18.818-7.523-34.725-13.68-35.347-13.68-.686 0-1.132 5.386-1.132 13.68v13.68H342.567l-106.589-63.91zm106.59-200.568v-78.089l-63.84-.57-63.84-.57V343.707l63.84-.57 63.84-.57V186.39l-63.84-.57-63.84-.57-.57-63.84-.57-63.84H57.57l-.288 242.786-.288 242.785 49.866 49.914 49.867 49.915 92.92-.292 92.92-.292v-78.09zm593.67 28.751l49.861-49.909-.288-178.374-.289-178.374-78.37-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.369-.293-78.37-.293-.29 149.631-.289 149.632h-55.86l-.57-149.339-.57-149.338-78.374-.293-78.374-.293v457.152h486.241l49.86-49.909zm263.602-178.66V186.39l-78.374-.293-78.374-.293V642.97l78.374-.293 78.374-.293V414.387zm342.568 149.919v-78.65l-63.555-.295-63.554-.294V343.707l63.554-.294 63.555-.295v-157.28l-63.555-.295-63.554-.294-.57-63.84-.57-63.84h-156.18l-.286 242.81-.289 242.812 49.873 49.882 49.872 49.882h185.259v-78.65zm400.136-.012v-78.66h-92.217c-83.038 0-92.285-.178-92.91-1.801-.903-2.357-.903-136.537 0-138.894.625-1.623 9.872-1.803 92.91-1.803h92.217V185.816h-243.358l-49.32 49.32-49.319 49.32v259.859l49.32 49.32 49.32 49.318h243.357v-78.66zm214.6-70.964l.289-149.624h127.679l.57 149.339.57 149.339h156.178l.289-178.375.288-178.374-49.86-49.909-49.86-49.909h-91.933c-75.52 0-92.159-.273-93.202-1.53-.89-1.074-1.357-20.206-1.564-64.124l-.295-62.595h-156.179l-.292 291.268c-.16 160.197-.049 291.91.249 292.693.426 1.12 17.214 1.425 78.662 1.425h78.122l.288-149.624zM1199.84 92.907v-35.34h-156.178l-.302 34.189c-.167 18.801-.054 34.837.251 35.631.443 1.152 16.374 1.386 78.392 1.153l77.837-.293v-35.34z"
                                            fill-rule="nonzero"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full mt-20 lg:w-1/2 lg:mt-0">
                        <div className="relative z-20 grid w-full grid-cols-4 gap-5 mt-4 transform -rotate-6">
                            <div
                                className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3"
                                data-rounded="rounded-lg" data-rounded-max="rounded-full">
                                <img src="https://cdn.devdojo.com/images/january2021/image1.png"
                                     className="w-full h-auto"/>
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3"
                                data-rounded="rounded-lg" data-rounded-max="rounded-full"><br/><img
                                src="https://cdn.devdojo.com/images/january2021/image2.png" className="w-full h-auto"/>
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3"
                                data-rounded="rounded-lg" data-rounded-max="rounded-full">
                                <img src="https://cdn.devdojo.com/images/january2021/image3.png"
                                     className="w-full h-auto"/>
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3"
                                data-rounded="rounded-lg" data-rounded-max="rounded-full">
                                <img src="https://cdn.devdojo.com/images/january2021/image4.png"
                                     className="w-full h-auto"/>
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3"
                                data-rounded="rounded-lg" data-rounded-max="rounded-full">
                                <img src="https://cdn.devdojo.com/images/january2021/image5.png"
                                     className="w-full h-auto"/>
                            </div>
                            <div
                                className="flex items-center justify-center w-full h-auto col-span-2 p-3 overflow-hidden transform bg-white rounded-lg shadow-xl -rotate-3"
                                data-rounded="rounded-lg" data-rounded-max="rounded-full">
                                <img src="https://cdn.devdojo.com/images/january2021/image6.png"
                                     className="w-full h-auto"/>
                            </div>
                        </div>


                        <div
                            className="absolute top-0 right-0 z-10 w-full h-full mt-4 -mr-5 transform scale-125 rotate-45">
                            <svg
                                className="absolute top-0 w-full h-full transform opacity-50 fill-current lg:scale-x-150 text-blue-50"
                                data-primary="blue-600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.3,-64.3C51.3,-56.4,67.9,-52.6,76.3,-42.5C84.7,-32.5,84.9,-16.3,80.3,-2.7C75.6,10.9,66.2,21.8,60.2,36.1C54.2,50.3,51.8,67.9,42.3,76.4C32.9,84.9,16.4,84.3,2.4,80.2C-11.7,76.2,-23.4,68.5,-36.8,62.3C-50.1,56,-65,51.1,-73.2,40.9C-81.4,30.7,-82.9,15.4,-78.6,2.5C-74.4,-10.4,-64.3,-20.9,-58.2,-34.6C-52,-48.3,-49.7,-65.3,-40.7,-76C-31.6,-86.8,-15.8,-91.4,-2.1,-87.8C11.6,-84.1,23.2,-72.2,37.3,-64.3Z"
                                    transform="translate(100 100)" className=""></path>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

