import axios from 'axios'
import {useState, useEffect} from 'react'

const useFetch = <T>() => {
	const [responses, setResponses] = useState<T[] | null>();//Solve this
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
//	implement cleanup
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.3433&lon=17.8081&exclude=hourly,minutely&units=metric&appid=aa82300a51d0a8bc17588381a83903bc`)
			.then((resp: any) => {
				console.log(resp.data.daily)
				setIsLoading(false);
				setIsError(false);
				setResponses(resp.data.daily);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(err.response.data.message);
				setResponses(null);
			});
		return () => {};
	}, []);

	return {responses, isLoading, isError}
};

export default useFetch;