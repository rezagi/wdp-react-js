import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 
import Button from "../../components/Button/Button";
import CardImageDetail from "../../components/Card/CardImageDetail";
import Loading from "../../components/Loading";

const DigimonDetail = () => {
	const params = useParams();

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`https://api.jikan.moe/v4/anime/${params.mal_id}`)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, [params]);

	return (
		<div class="container py-10">
			{!data && (
				<Loading text={'Loading... Please Wait'} />
			)}
			{data && (
				<div class="mx-auto flex px-5 py-10 items-center justify-center flex-col border-2">
					<CardImageDetail url={data.data.images.jpg.image_url} alt={'Digimon Detail'} title={data.data.title} />
					<div class="text-center lg:w-2/3 w-full">
						<p class="mb-8 leading-relaxed">Synopsis : {data.data.synopsis}</p>
					</div>
					<div class="flex justify-center">
						<Link to = "/digimon" >
							<Button text={'Back'} />
						</Link>
						<a href={data.data.url} target="_blank" class="px-5">
							<Button text={'More Detail'} />
						</a> <br/>
					</div>				
				</div>
			)}
		</div>
	);
};

export default DigimonDetail;
