import axios from 'axios';

const Axios = axios.create({
	baseURL: 'https://conduit.productionready.io',
	method: 'post',
});

// 添加请求拦截器
Axios.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		return config;
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
Axios.interceptors.response.use(
	function(response) {
		console.log(response);
		// 对响应数据做点什么
		return response.data;
	},
	function(error) {
		// 对响应错误做点什么
		let errors = error.response.data.errors;
		let errorText = '';
		Object.keys(errors).forEach((key) => {
			errorText = `${errorText}${errorText ? '，' : ''}${key}`;
			errors[key].forEach((v) => {
				errorText += v;
			});
		});
		return Promise.reject(errorText);
	}
);

export default Axios;
