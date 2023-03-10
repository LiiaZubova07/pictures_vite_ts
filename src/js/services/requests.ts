 //запрос на сервер
const postData = async (url:string, data:FormData): Promise<string> => {
	const res = await fetch(url, {
	  method: 'POST',
	  body: data,
	});

	return await res.text();
 };

  //запрос на сервер
  const getResource = async (url:string) => {
	const res = await fetch(url);

	//если что-то не так, выходит ошибка
	if (!res.ok){
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	};

	return await res.json();
 };

 export {postData, getResource};