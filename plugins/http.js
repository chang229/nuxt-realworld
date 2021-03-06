import axios from 'axios';

export const Axios = axios.create({
	baseURL: 'https://conduit.productionready.io',
	method: 'post',
});

export default ({ store }) => {
	// 添加请求拦截器
	Axios.interceptors.request.use(
		function(config) {
			// 在发送请求之前做些什么
			let { user } = store.state;
			if (user && user.token) {
				config.headers.Authorization = `Token ${user.token}`;
			}
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
			// 对响应数据做点什么
			return response && response.data ? response.data : response;
		},
		function(error) {
			// 对响应错误做点什么
			let errors = error && error.response ? error.response.data.errors : [];
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
};
