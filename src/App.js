import { useState, Component } from "react";
import Main from "./pages/Main";
import { Routes, Route, Link } from "react-router-dom";
import GintamaList from "./pages/Gintama/GintamaList";
import GintamaDetail from "./pages/Gintama/GintamaDetail";
import BleachList from "./pages/Bleach/BleachList";
import BleachDetail from "./pages/Bleach/BleachDetail";
import DigimonList from "./pages/Digimon/DigimonList";
import DigimonDetail from "./pages/Digimon/DigimonDetail";
import GundamList from "./pages/Gundam/GundamList";
import GundamDetail from "./pages/Gundam/GundamDetail";
import ButtonNav from "./components/Button/ButtonNav";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	
    function selectNew() {
        var newL = document.getElementById("list");
        newL.classList.toggle("hidden");

        document.getElementById("ArrowSVG").classList.toggle("rotate-180");
    }

    function selectedSmall(ob) {
        var text = ob.target.innerText;
        var newL = document.getElementById("list");
        var newText = document.getElementById("textClicked");
        newL.classList.add("hidden");
        document.getElementById("ArrowSVG").classList.toggle("rotate-180");
        newText.innerText = text;

        document.getElementById("s1").classList.remove("hidden");
    }	

	return (

        <div>
            <div class="bg-black shadow-lg py-5 px-7 justify-between 2xl:container 2xl:mx-auto fixed w-full">
                <nav class="flex justify-between relative" id="navbar-wide">
                    <ul class="hidden md:flex flex-auto space-x-2 justify-center /">
                        <li>                            
                            <Link to="/"><ButtonNav text={'About SIte'} /></Link></li>
						<li>
                            <Link to="/bleach"><ButtonNav text={'Bleach'} /></Link></li>
						<li>
                            <Link to="/digimon"><ButtonNav text={'Digimon'} /></Link></li>
                        <li>
                            <Link to="/gintama"><ButtonNav text={'Gintama'} /></Link></li>
						<li>
                            <Link to="/gundam"><ButtonNav text={'Gundam'} /></Link></li>

                    </ul>
                </nav>

                <div class="block md:hidden w-full mt-5 ">
				<div onClick={selectNew}
                        class="cursor-pointer px-4 py-3 text-white bg-blue-400 rounded flex justify-between items-center w-full">
                        <div class="flex space-x-2">
                            <span id="s1" class="font-semibold text-sm leading-3 hidden"></span>
                            <p>About Site</p>
                        </div>
                        <svg id="ArrowSVG" class=" transform" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class=" relative">
                        <ul id="list"
                            class=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md">
                            <li onClick={selectedSmall}
                                class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-s leading-3 font-normal">
                                <Link to="/">About Site</Link></li>
								<li onClick={selectedSmall}
                                class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-s leading-3 font-normal">
                                <Link to="/bleach">Bleach</Link></li>
								<li onClick={selectedSmall}
                                class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-s leading-3 font-normal">
                                <Link to="/digimon">Digimon</Link></li>
								<li onClick={selectedSmall}
                                class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-s leading-3 font-normal">
                                <Link to="/gintama">Gintama</Link></li>
								<li onClick={selectedSmall}
                                class="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-s leading-3 font-normal">
                                <Link to="/gundam">Gundam</Link></li>
                        </ul>
                    </div>
                </div>				
            </div>	
			<div class="container px-5 py-20 mx-auto w-full justify-center">
				<Routes>
					<Route path="/bleach/:mal_id" element={<BleachDetail />} />
					<Route path="/bleach" element={<BleachList />} />
					<Route path="/digimon/:mal_id" element={<DigimonDetail />} />
					<Route path="/digimon" element={<DigimonList />} />
					<Route path="/gintama/:mal_id" element={<GintamaDetail />} />
					<Route path="/gintama" element={<GintamaList />} />
					<Route path="/gundam/:mal_id" element={<GundamDetail />} />
					<Route path="/gundam" element={<GundamList />} />
					<Route path="/" element={<Main />} />
				</Routes>	
			</div>			

			<footer class="text-white body-font bg-black">
				<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<p
						class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 text-center">
						©
						2022 - Anime Lover
					</p>
					<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a href="https://facebook.com/reza.agi.3" target="_blank">
							<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a class="ml-3" href="https://twitter.com/rezaagi" target="_blank">
							<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								class="w-5 h-5" viewBox="0 0 24 24">
								<path
									d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
								</path>
							</svg>
						</a>
						<a class="ml-3" href="https://instagram.com/rezagi66" target="_blank">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
					</span>
				</div>
   		 	</footer>	
		</div>
		

	);
}


export default App;
