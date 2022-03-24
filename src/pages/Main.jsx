import React, { Component } from "react";
import "../App.css";

export default class Main extends Component {
	render() {
		return (
    <header class="body-font dark:bg-third" id="projects">
        <div class="container px-5 py-10 mx-auto">
            <div class="flex items-center justify-center">
                <div class="font-semibold text-center">
                    <h1 class="text-3xl dark:text-white">ABOUT THIS SITE</h1>
                </div>
            </div>
            <section class="text-secondary body-font">
                <div class="container px-5 mx-auto flex flex-col">
                    <div class="mx-auto">
                        <div class="flex flex-col sm:flex-row mt-10">

                            <div
                                class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-secondary dark:border-white sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-justify">
                                <p
                                    class="leading-relaxed text-lg mb-5 font-primary dark:text-white first-letter:text-8xl first-letter:float-left first-letter:mr-2">
                                    Anime Lover adalah sebuah situs yang menyediakan infomrasi mengenai review dan preview anime-anime yang populer dan seru pastinya.
                                    yoo.. mari.. mari.. kumpul disini.. para pecinta anime. Jangan ngaku suka anime kalau belum buka situs ini, hehe 🤣</p>
                                <p  class="leading-relaxed text-lg mb-5 font-primary dark:text-white">
                                    Kami sajikan deretan review dan kumpulan movie -movie anime kesukaan para anime lover semua. Jangan ragu, jangan bimbang dijamin recommended anime yang kami sajikan.
                                    So.. Let's check this site guys.. 😎
                                </p>
                                <p  class="leading-relaxed text-lg mb-5 font-primary dark:text-white">
                                    Jangan lupa juga follow sosial media kami ya., 👍
                                    Ayo bersama kita kembangkan dan majukan situs ini, menuju pecinta anime bersatu, hahaha
                                </p>

                            </div>
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <img class="mb-3 w-50 h-50 mx-auto" src="anime.png"
                                    alt="Anime Lover" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
		);
	}
}
