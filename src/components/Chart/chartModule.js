module.exports =
{
	getSenData: async (id) => {
		return new Promise(async (resolve, rejects) => {
			console.log(id);
			try {
				const body = {
					id: id
				}
				fetch('http://localhost:3001/Sensor/Chart',
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						credentials: "include",
						body: JSON.stringify(body)
					}).then(res => res.json()).then(sen => {
						console.log(sen);
						resolve(sen);
					});
			} catch (err) {
				console.log(err);
				rejects(err);
			}
		})
	},

	setChartData: (data) => {
		data = data.results;
		//console.log(data[0].ec_value);
		let result = {
			labels: data.map(x => x.time),
			datasets: [
				{
					type: 'line',
					label: 'Dataset 1',
					borderColor: 'rgb(54, 162, 235)',
					borderWidth: 2,
					data: data.map(x => x.ec_value),
					yAxisID: 'y_sub'
				}]
		}
		//console.log(result);
		return result
	}
}
